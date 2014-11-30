module.exports = function(grunt) {
  /*
   * Include grunt configuration
   */
  var gruntConfig = require( './config/grunt.conf.js' );

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
    shell: {
      dev_server: {
        command: './server/build-server.sh'
      },
      prod_server: {
        command: './server/production-server.sh'
      },
      run_selenium: {
        command: './node_modules/protractor/bin/webdriver-manager start'
      },
      update_selenium: {
        command: './node_modules/protractor/bin/webdriver-manager update'
      }
    },
    //////////////
    copy: {
      build_app_js: {
        src: [
          findModuleFilesIn('./src/app/'),
          findModuleFilesIn('./src/common/')
        ],
        dest: '<%= build_dir %>'
      },
      build_app_data: {
        src: ['./src/app/**/*.json'],
        dest: '<%= build_dir %>/data/',
        expand: true,
        flatten: true,
        filter: 'isFile'
      },
      build_unit: {
        src: ['./src/**/*.spec.js'],
        dest: '<%= build_dir %>'
      },
      build_vendor_js: {
        src: ['<%= build.vendor_js %>'],
        dest: '<%= build_dir %>'
      },
      build_views: {
        cwd: './src',
        src: ['app/**/*.html', '!app/shared/**/*.html'],
        dest: '<%= build_dir %>/views/',
        expand: true,
        flatten: true,
        filter: 'isFile'
      },
      build_shared_views: {
        cwd: './src',
        src: ['app/shared/**/*.html'],
        dest: '<%= build_dir %>/shared-views/',
        expand: true,
        flatten: true,
        filter: 'isFile'
      },
      build_index: {
        cwd: './src',
        src: ['index.html'],
        dest: '<%= build_dir %>',
        expand: true,
        options: {
          process: processBuildScripts
        }
      },
      build_assets: {
        cwd: './src/assets',
        src: [
          'img/**/*',
          'fonts/**/*',
          '!**/*.less',
          '!**/*.css'
        ],
        dest: '<%= build_dir %>src/assets/',
        expand: true
      },
      build_fonts: {
        src: ['<%= common.vendor_fonts %>'],
        dest: '<%= build_dir %>src/assets/fonts/',
        expand: true,
        flatten: true,
        filter: 'isFile'
      },
      build_karma: {
        src: ['./config/karma.conf.js'],
        dest: '<%= build_dir %>',
        options: {
          process: processBuildScripts
        }
      },
      build_protractor: {
        cwd: './src',
        src: ['**/*.protractor.js', '**/*.e2e.js'],
        dest: '<%= build_dir %>src/e2e/',
        expand: true,
        flatten: true
      },
      compile_app_data: {
        cwd: '<%= build_dir %>',
        src: ['data/*.json'],
        dest: '<%= compile_dir %>',
        expand: true
      },
      compile_views: {
        cwd: '<%= build_dir %>',
        src: ['views/**/*.html'],
        dest: '<%= compile_dir %>',
        expand: true
      },
      compile_index: {
        cwd: './src',
        src: ['index.html'],
        dest: '<%= compile_dir %>',
        expand: true,
        options: {
          process: function processCompileIndex(content){
            return grunt.template.process(content);
          }
        }
      },
      compile_app_assets: {
        cwd: '<%= build_dir %>',
        src: ['src/assets/**/*', '!src/assets/**/*.md'],
        dest: '<%= compile_dir %>',
        expand: true
      }
    },
    /////////////////
    clean: {
      build_clean: ['<%= build_dir %>'],
      build_css_clean: ['<%= build_dir %>/src/assets/css/app.custom.css'],
      compile_js_clean: ['<%= compile_dir %>/src/app/modules.min.js'],
      compile_shared_views_clean: ['<%= compile_dir %>/shared-views/']
    },
    /////////////////
    less: {
      build_less: {
        src: ['./src/assets/**/*.less'],
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
    uglify: {
      compile_module_js: {
        options: {
          wrap: 'moduleExports',
          mangle: {
            except: ['exceptionLoggingService']
          }
        },
        src: [
          '<%= compile.vendor_js %>',
          findModuleFilesIn('./build/src/app/'),
          findModuleFilesIn('./build/src/common/')
        ],
        dest: '<%= compile_dir %>/src/app/modules.min.js'
      },
      compile_cleanup: {
        options: {
          beautify: true,
          mangle: false
        },
        src: ['<%= compile_dir %>/src/app/app.min.js'],
        dest: '<%= compile_dir %>/src/app/app.min.js'
      }
    },
    /////////////////
    concat: {
      compile_js: {
        src: [
          '<%= compile.vendor_min_js %>',
          '<%= compile_dir %>/src/app/modules.min.js',
          '<%= compile_dir %>/shared-views/views.min.js'
        ],
        dest: '<%= compile_dir %>/src/app/app.min.js'
      }
    },
    /////////////////
    html2js: {
      options: {
        htmlmin: {
          collapseBooleanAttributes: false,
          collapseWhitespace: true,
          removeAttributeQuotes: false,
          removeComments: true,
          removeEmptyAttributes: false,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        }
      },
      compile_shared_views: {
        src: ['<%= build_dir %>/shared-views/**/*.html'],
        dest: '<%= compile_dir %>/shared-views/views.min.js',
        options: {
          module: 'sharedViewsModule',
          base: './build',
          singleModule: true
        }
      }
    },
    /////////////////
    jshint: {
      options: {
        jshintrc: true
      },
      src_js: ['./src/**/*.js'],
      gruntfiles: ['./gruntfile.js', 'grunt.conf.js']
    },
    /////////////////
    karma: {
      options: {
        configFile: '<%= build_dir %>/config/karma.conf.js'
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
        keepAlive: true, // If false, the grunt process stops when the test fails.
        noColor: false, // If true, protractor will not use colors in its output.
        args: {}
      },
      build: {
        options: {
          configFile: './config/protractor.conf.js', // Default config file
        }
      },
      ci_dev: {
        options: {
          configFile: './config/protractor-ci.conf.js'
        }
      },
      ci_prod: {
        options: {
          configFile: './config/protractor-ci-prod.conf.js'
        }
      }
    },
    /////////////////
    watch: {
      options: {
        livereload: true
      },
      src_js: {
        files: ['./src/**/*.js', './src/**/*.json'],
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
      src_assets: {
        files: ['./src/assets/**/*', '!./src/assets/**/*.less', '!./src/assets/**/*.css'],
        tasks: ['newer:copy:build_assets']
      },
      gruntfiles: {
        files: ['./gruntfile.js', 'grunt.conf.js'],
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
  grunt.registerTask('build', [
    'copy:build_app_js',
    'copy:build_app_data',
    'copy:build_vendor_js',
    'copy:build_views',
    'copy:build_shared_views',
    'copy:build_fonts',
    'copy:build_index',
    'copy:build_unit',
    'copy:build_protractor',
    'copy:build_karma',
    'copy:build_assets',
    'less:build_less',
    'cssmin:build_css',
    'clean:build_css_clean'
  ]);
  grunt.registerTask('compile', [
    'clean:build_clean',
    'build',
    'copy:compile_views',
    'html2js:compile_shared_views',
    'uglify:compile_module_js',
    'concat:compile_js',
    'uglify:compile_cleanup',
    'clean:compile_js_clean',
    'clean:compile_shared_views_clean',
    'copy:compile_app_data',
    'copy:compile_app_assets',
    'copy:compile_index'
  ]);
  grunt.registerTask('test', ['karma:unit', 'protractor:build']);
  grunt.registerTask('test:unit', ['karma:unit']);
  grunt.registerTask('test:ci', ['karma:unit', 'protractor:ci_dev', 'protractor:ci_prod']);
  grunt.registerTask('test:e2e', ['protractor:build']);
};