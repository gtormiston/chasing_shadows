module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine-jquery','jasmine'],
    files: [
      './node_modules/es6-promise/dist/es6-promise.js',
      'test/units/*spec.js',
      'http://maps.googleapis.com/maps/api/js?sensor=false&language=en',
      'www/scripts/dist/all.js'
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
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  });
};
