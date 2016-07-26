var gulp = require('gulp')
var Server = require('karma').Server;
connect = require('gulp-connect');
// var phantom = require('phantomjs-prebuilt');


gulp.task('tdd', function (done) {
  new Server ({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

gulp.task('feature', function() {
  connect.server({
    root: ['www'],

  });
});

gulp.task('webserver', function() {
  connect.server({
    root: ['www']
  });


});

gulp.task('default', ['tdd']);
