var gulp = require('gulp')
var gutil = require('gulp-util')
var gulpLiveScript = require('gulp-livescript');
var browserify = require('gulp-browserify');

gulp.task('build-ls-file', function() {
  return gulp.src('./src/**/*.ls')
    .pipe(gulpLiveScript({bare: true})
    .on('error', gutil.log))
    .pipe(gulp.dest('./'))
});

gulp.task('browserify-it', ['build-ls-file'], function(){
  return gulp.src('./test.js')
    .pipe(browserify())
    .pipe(gulp.dest('./web/js'))
})

gulp.task('compile', ['browserify-it'])

gulp.task('default', function() {
  gulp.watch('./src/**/*.ls', ['compile'])
});