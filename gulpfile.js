var gulp = require('gulp'),
    watch = require('gulp-watch'),
    Server = require('karma').Server,
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

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

gulp.task('scripts', function() {
  return gulp.src(['./www/scripts/vendors/jquery-3.1.0.min.js',
                   './www/scripts/vendors/jquery.animateSprite.js',
                   './www/scripts/vendors/jquery.rotate.js',
                   './www/scripts/js/spriteanimations.js',
                   './www/scripts/js/vars.js',
                   './www/scripts/js/ajax.js',
                   './www/scripts/js/initializers.js',
                   './www/scripts/js/templates.js',
                   './www/scripts/js/map_styles.js',
                   './www/scripts/js/map_markers.js',
                   './www/scripts/js/map_index.js',
                   './www/scripts/js/match_height.js',
                   './www/scripts/js/index.js',
                  ])
    .pipe(concat('all.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('./www/scripts/dist'));
});

gulp.task('watch', function () {
  gulp.watch('./www/sass/**/*.scss', ['sass']);
  gulp.watch('./www/scripts/js/*.js', ['scripts']);
});
