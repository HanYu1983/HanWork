var gulp = require('gulp')
var gulpPlumber = require('gulp-plumber');
var gutil = require('gulp-util')
var gulpLiveScript = require('gulp-livescript');
var browserify = require('gulp-browserify');

gulp.task('build-ls-file', function() {
  return gulp.src('./src/**/*.ls')
    .pipe(gulpPlumber({
      errorHandler: function (err) {
        this.emit('end');
      }
    }))
    .pipe(gulpLiveScript({bare: true})
    .on('error', gutil.log))
    .pipe(gulp.dest('./'))
});

gulp.task('browserify-it', ['build-ls-file'], function(){
  return gulp.src('./test.js')
    .pipe(browserify())
    .pipe(gulp.dest('./web/js'))
})

gulp.task('compile-web', ['browserify-it'])
gulp.task('compile-node', ['build-ls-file'])

gulp.task('default', function() {
  gulp.watch('./src/**/*.ls', ['compile-node'])
});