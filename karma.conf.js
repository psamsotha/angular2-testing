
module.exports = function(config) {
  var appBase    = 'app/'; // transpiled app JS and map files
  var appSrcBase = 'app/'; // app source TS files

  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter')
    ],

    files: [
      'node_modules/systemjs/dist/system.src.js',

      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

      { pattern: 'systemjs.config.js', included: false, watched: false },
      'karma-test-shim.js',

      { pattern: 'app/counter/counter.js', included: false, watched: true },
      { pattern: 'app/counter/counter.spec.js', included: false, watched: true }
    ],

    reporters: ['progress', 'kjhtml'],

    exclude: [],
    preprocessors: {},
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
