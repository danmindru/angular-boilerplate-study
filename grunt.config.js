/*
 * Configuration variables
 */

module.exports = {
  ////////////
  build_dir: './build/',
  compile_dir: './application/',
  ////////////
  build: {
    ////////////
    vendor_js: [
      'vendor/angular/angular.js',
      'vendor/stacktrace-js/stacktrace.js',
      'vendor/loggly-jslogger/src/loggly.tracker.js'
    ]
  },
  ////////////
  module_file_order: [
    '**/*.config.js',
    '**/*.constant.js',
    '**/*.run.js',
    '**/*.service.js',
    '**/*.controller.js'
  ]
};