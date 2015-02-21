// Karma configuration
// Generated on Thu Jan 29 2015 18:36:36 GMT-0200 (BRST)
var ci = process.env['CI'];

var RewirePlugin = require('rewire-webpack');
var path = require('path');

module.exports = function(config) {
  config.set({

    // base path that will be used to join all patterns (eg. files, exclude)
    basePath: '.',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'spec/**/*-spec.jsx'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'spec/**/*-spec.jsx': ['webpack']
    },

    webpack: {
      cache: true,
      module: {
        loaders: [
          {test: /\.jsx$/, loader: 'jsx-loader'}
        ]
      },
      resolve: {
        extensions: ['', '.js', '.jsx'],
        root: path.join(__dirname, './src/client'),
        alias: {
          'app': path.join(__dirname, './src/client'),
          'standalone-library$': path.join(__dirname, './src/vendor/standalone-library'),
          'rewire-module': path.join(__dirname, './spec/helpers/rewire-module.jsx')
        }
      },
      plugins: [
        new RewirePlugin()
      ]
    },

    webpackServer: {
      stats: {
        colors: true
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: !!ci,

    plugins: [
      require('karma-webpack'),
      require('karma-jasmine'),
      require('karma-firefox-launcher')
    ]
  });
};