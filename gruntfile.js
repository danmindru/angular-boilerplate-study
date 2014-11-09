'use strict';

module.exports = function(grunt) {
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
    }
	});

	/*
   * Tasks
   */
	grunt.registerTask('default', []);
  grunt.registerTask('build', []);
  grunt.registerTask('compile', []);
};
