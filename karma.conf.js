module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'https://maps.googleapis.com/maps/api/js?sensor=false',
      './www/scripts/vendors/jquery-3.1.0.min.js',
                       './www/scripts/vendors/jquery.animateSprite.js',
                       './www/scripts/vendors/jquery.rotate.js',
                       './www/scripts/js/spriteanimations.js',
                       './www/scripts/js/vars.js',
                       './www/scripts/js/ajax.js',
                       './www/scripts/js/initializers.js',
                       './www/scripts/js/templates.js',
                       './www/scripts/js/map_styles.js',
                       './www/scripts/js/map_markers.js',
                       './www/scripts/js/monster_markers.js',
                       './www/scripts/js/map_index.js',
                       './www/scripts/js/match_height.js',
                       './www/scripts/js/index.js',
      'test/units/*spec.js'
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
