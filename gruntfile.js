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
  grunt.loadNpmTasks('grunt-protractor-runner');

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
      build_unit: {
        src: ['src/**/*.spec.js'],
        dest: '<%= build_dir %>'
      },
      build_vendor_js: {
        src: ['<%= build.vendor_js %>'],
        dest: '<%= build_dir %>'
      },
      build_views: {
        src: ['./src/**/*.html', '!./src/**/index.html'],
        expand: true,
        flatten: true,
        dest: '<%= build_dir %>/views/'
      },
      build_index: {
        src: ['./src/index.html'],
        dest: '<%= build_dir %>',
        expand: true,
        flatten: true,
        options: {
          process: processBuildScripts
        }
      },
      build_karma: {
        src: ['./karma.conf.js'],
        dest: '<%= build_dir %>',
        options: {
          process: processBuildScripts
        }
      },
      build_protractor: {
        src: ['./src/**/*.protractor.js', './src/**/*.e2e.js'],
        expand: true,
        flatten: true,
        dest: '<%= build_dir %>src/e2e/'
      }
    },
    /////////////////
    clean: {
      build_css_clean: ['<%= build_dir %>/src/assets/css/app.custom.css']
    },
    /////////////////
    less: {
      build_less: {
        src: [
          './src/assets/**/*.less'
        ],
        dest: '<%= build_dir %>/src/assets/css/app.custom.css',
        options: {
          cleancss: true,
          compress: true
        }
      }
    },
    /////////////////
    cssmin: {
      build_css: {
        src: [
          '<%= build.vendor_css %>',
          './src/assets/**/*.css',
          '<%= build_dir %>/src/assets/css/app.custom.css'
        ],
        dest: '<%= build_dir %>/src/assets/css/app.min.css'
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
    protractor: {
      options: {
        configFile: "protractor.conf.js", // Default config file
        keepAlive: true, // If false, the grunt process stops when the test fails.
        noColor: false, // If true, protractor will not use colors in its output.
        args: {}
      },
      build: {},
      /*compile: {
        options: {
          configFile: "protractor/protractor-prod.conf.js"
        }
      }*/
    },
    /////////////////
    watch: {
      options: {
        livereload: true
      },
      src_js: {
        files: ['./src/**/*.js'],
        tasks: ['newer:jshint:src_js', 'newer:copy:build_app_js']
      },
      src_html: {
        files: ['./src/**/*.html', '!./src/index.html'],
        tasks: ['newer:copy:build_views']
      },
      src_index: {
        files: ['./src/index.html'],
        tasks: ['copy:build_index']
      },
      src_stylesheets: {
        files: ['./src/assets/**/*.less', './src/assets/**/*.css'],
        tasks: ['newer:less:build_less', 'cssmin:build_css', 'clean:build_css_clean']
      },
      gruntfiles: {
        files: ['./gruntfile.js', 'grunt.config.js'],
        tasks: ['newer:jshint:gruntfiles'],
        options: {
          livereload: false
        }
      },
      tests: {
        files: ['src/**/*.spec.js', 'src/**/*.e2e.js', 'src/**/*.protractor.js'],
        tasks: ['newer:copy:build_karma', 'newer:copy:build_unit', 'newer:copy:build_protractor']
      }
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
  function processBuildScripts(content){
    var buildScripts = [],
        globFiles,
        customModules = gruntConfig.build.vendor_js
                        .concat(findModuleFilesIn('./src/app/'))
                        .concat(findModuleFilesIn('./src/common/'));

    customModules.forEach(function(module){
      globFiles = glob.sync(module);

      if(globFiles.length > 0){
        buildScripts = buildScripts.concat(globFiles);
      }
    });

    return grunt.template.process(content, {
      data: {
        scripts: buildScripts
      }
    });
  }

  /*
   * Tasks
   */
  grunt.registerTask('default', ['jshint', 'build', 'karma:unit', 'watch']);
  grunt.registerTask('build', ['copy:build_app_js', 'copy:build_vendor_js', 'copy:build_views', 'copy:build_index', 'copy:build_unit', 'copy:build_protractor', 'copy:build_karma', 'less:build_less', 'cssmin:build_css', 'clean:build_css_clean']);
  grunt.registerTask('compile', []);
  grunt.registerTask('test', ['karma:unit', 'protractor']);
};