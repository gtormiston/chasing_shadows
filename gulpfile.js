var gulp = require('gulp');
    watch = require('gulp-watch');
var Server = require('karma').Server;
var sass = require('gulp-sass');
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

gulp.task('sass', function () {
  return gulp.src('./www/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./www/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./www/sass/**/*.scss', ['sass']);
});
