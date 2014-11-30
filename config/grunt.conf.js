/*
 * Configuration variables for Grunt
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
      './vendor/stacktrace-js/dist/stacktrace.js',
      './vendor/loggly-jslogger/src/loggly.tracker.js'
    ],
    ////////////
    vendor_css: [
      './vendor/bootstrap/dist/css/bootstrap.min.css'
    ]
  },
  compile: {
    vendor_min_js: [//won't minify again
      './vendor/angular/angular.min.js',
      './vendor/angular-ui-router/release/angular-ui-router.min.js',
      './vendor/stacktrace-js/dist/stacktrace.min.js',
      './vendor/loggly-jslogger/src/loggly.tracker.js',
    ],
    vendor_js: [//doesn't have a min files, will minify
    ]
  },
  common: {
    vendor_fonts: [
      './vendor/bootstrap/dist/fonts/**/*'
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