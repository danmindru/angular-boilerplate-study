'use strict';

module.exports = function(grunt) {
  /*
   * Configuration variables
   */
  var buildVendorJS = [
    './vendor/angular/angular.js'
  ];

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
	grunt.initConfig({
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
      build_js: {
        src: [
          './src/app/app-main/app-main.init.js',
          './src/app/**/*.config.js',
          './src/app/**/*.controller.js'
        ],
        dest: './build/'
      },
      build_vendor_js: {
        src: buildVendorJS,
        dest: './build/vendor/',
        expand: true,
        flatten: true
      },
      build_index: {
        src: ['./src/index.html'],
        dest: './build/',
        expand: true,
        flatten: true
      }
    }
	});

	/*
   * Tasks
   */
	grunt.registerTask('default', []);
  grunt.registerTask('build', ['copy:build_js', 'copy:build_index', 'copy:build_vendor_js']); //launch chrome window on port 8989
  grunt.registerTask('compile', []);
};
