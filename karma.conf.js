module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/units/*spec.js',
      'www/scripts/js/**/*.js'
    ],
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    cordovaSettings: {
      platforms: ['ios'],
      mode: 'emulate',
      //hostip: '185.53.227.70',
      plugins: [
        'org.apache.cordova.console'
      ]
    },
    browsers: ['PhantomJS', 'Chrome'],
    singleRun: false,
    concurrency: Infinity
  });
};
