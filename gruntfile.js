module.exports = function(grunt) {
  /*
   * Include grunt configuration
   */
  var gruntConfig = require( './grunt.config.js' );

  /*
   * Helpers (preparing for grunt util deprecation)
   */
  var glob = require('glob');

  /*
   * Time grunt execution
   */
  require('time-grunt')(grunt);

  /*
   * JIT Grunt will automatically load other npm tasks
   */
  require('jit-grunt')(grunt);

  /*
   * Configuration
   */
  var gruntTasks = {
    //////////////
    pkg: grunt.file.readJSON('package.json'),
    /*
     * Placed at the top of the compiled source files.
     */
    meta: {
      banner:
        '/*\n' +
        ' * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
        ' * <%= pkg.repository.url %>\n' +
        ' *\n' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
        ' * Licensed <%= pkg.licenses.type %> <<%= pkg.licenses.url %>>\n' +
        ' */\n'
    },
    //////////////
    copy: {
      build_app_js: {
        src: [
          findModuleFilesIn('./src/app/'),
          findModuleFilesIn('./src/common/'),
        ],
        dest: '<%= build_dir %>'
      },
      build_vendor_js: {
        src: ['<%= build.vendor_js %>'],
        dest: '<%= build_dir %>'
      },
      build_index: {
        src: ['./src/index.html'],
        dest: '<%= build_dir %>',
        expand: true,
        flatten: true,
        options: {
          process: processIndexBuild
        }
      },
      build_karma: {
        src: ['./karma.conf.js'],
        dest: '<%= build_dir %>',
        options: {
          process: processIndexBuild
        }
      }
    },
    /////////////////
    jshint: {
      options: {
        jshintrc: true
      },
      src_js: ['./src/**/*.js'],
      gruntfiles: ['./gruntfile.js', 'grunt.config.js']
    },
    /////////////////
    karma: {
      options: {
        configFile: '<%= build_dir %>/karma.conf.js'
      },
      unit: {
        port: 9191,
        background: false
      },
      continuous: {
        singleRun: false,
        autoWatch: true
      }
    },
    /////////////////
    watch: {
      options: {
        livereload: true
      },
      src_js: {
        files: ['./src/**/*.js', './src/**/*.html', '!./src/index.html'],
        tasks: ['newer:jshint:src_js', 'newer:copy:build_app_js']
      },
      src_index: {
        files: ['./src/index.html'],
        tasks: ['copy:build_index']
      },
      gruntfiles: {
        files: ['./gruntfile.js', 'grunt.config.js'],
        tasks: ['newer:jshint:gruntfiles'],
        options: {
          livereload: false
        }
      },
    }
  };

  /////////////////
  grunt.initConfig(
    grunt.util._.extend(gruntTasks, gruntConfig)
  );

  /*
   * Helpers
   */
   /////////////////
  function findModuleFilesIn(modulePath){
    var output = [],
        i;

    for(i = 0; i <= gruntConfig.module_file_order.length-1; i++){
      output.push(modulePath + gruntConfig.module_file_order[i]);
    }

    return output;
  }

  //////////////
  function processIndexBuild(content){
    var buildScripts = [];
    var customModules = gruntConfig.build.vendor_js
                        .concat(findModuleFilesIn('./src/app/'))
                        .concat(findModuleFilesIn('./src/common/'));

    customModules.forEach(function(module){
      glob(module, { sync: true }, function(err, files){
        if(files.length > 0){
          buildScripts = files.concat(buildScripts);
        }
      });
    });

    return grunt.template.process(content, {
      data: {
        scripts: buildScripts.reverse()
      }
    });
  }

  /*
   * Tasks
   */
  grunt.registerTask('default', ['build', 'karma:unit', 'watch']);
  grunt.registerTask('build', ['copy:build_app_js', 'copy:build_vendor_js', 'copy:build_index', 'copy:build_karma']);
  grunt.registerTask('compile', []);
  grunt.registerTask('test', ['karma:unit']);
};