'use strict';

module.exports = function(grunt) {
  /*
   * Include grunt configuration
   */
  var gruntConfig = require( './grunt.config.js' );

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
          './src/app/app-main/app-main.init.js',
          findModulesIn('./src/app/')
        ],
        dest: '<%= build_dir %>'
      },
      build_common_js: {
        src: findModulesIn('./src/common/'),
        dest: '<%= build_dir %>'
      },
      build_vendor_js: {
        src: ['<%= build.vendor_js %>'],
        dest: '<%= build_dir %>vendor/',
        expand: true,
        flatten: true
      },
      build_index: {
        src: ['./src/index.html'],
        dest: '<%= build_dir %>',
        expand: true,
        flatten: true
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
  function findModulesIn(modulePath){
    var output = [],
        i;

    for(i = 0; i <= gruntConfig.module_file_order.length-1; i++){
      output.push(modulePath + gruntConfig.module_file_order[i]);
    }

    return output;
  }

	/*
   * Tasks
   */
	grunt.registerTask('default', []);
  grunt.registerTask('build', ['copy:build_app_js', 'copy:build_index', 'copy:build_vendor_js', 'copy:build_common_js']); //launch chrome window on port 8989
  grunt.registerTask('compile', []);
};
