module.exports = function(config) {
  config.set({

    cordovaSettings: {
      platforms: ['ios'],
      mode: 'emulate',
      hostip: '185.53.227.70',
      plugins: [
        'org.apache.cordova.console'
      ]
    },

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'test/**/*Spec.js',
      'www/scripts/js/**/*.js'
    ],

    reporters: ['dots', 'progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    browsers: ['Cordova'],

    singleRun: false,

    concurrency: Infinity
  })
}
