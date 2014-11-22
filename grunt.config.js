/*
 * Configuration variables
 */

module.exports = {
  ////////////
  source_dir: './src/',
  build_dir: './build/',
  compile_dir: './application/',
  ////////////
  build: {
    ////////////
    vendor_js: [
      './vendor/angular/angular.js',
      './vendor/angular-ui-router/release/angular-ui-router.js',
      './vendor/angular-mocks/angular-mocks.js',
      './vendor/stacktrace-js/stacktrace.js',
      './vendor/loggly-jslogger/src/loggly.tracker.js'
    ],
    ////////////
    vendor_css: [
      './vendor/bootstrap/dist/css/bootstrap.min.css'
    ]
  },
  ////////////
  module_file_order: [
    '**/*.init.js', //EXPLAIN
    '**/*.config.js', //routes & constants, etc
    '**/*.run.js',
    '**/*.service.js', //factories & providers, etc
    '**/*.controller.js',
    '**/*.directive.js',
    '**/*.filter.js'
  ]
};