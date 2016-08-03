var gulp = require('gulp')
var gulpPlumber = require('gulp-plumber');
var gutil = require('gulp-util')
var gulpLiveScript = require('gulp-livescript');
var browserify = require('gulp-browserify');

gulp.task('轉譯ls檔', function() {
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

gulp.task('將需要的檔案轉譯到www', ['轉譯ls檔'], function(){
  return gulp.src('./web/*.js')
    .pipe(browserify())
    .pipe(gulp.dest('../www/build/js/'))
})

gulp.task('轉譯web', ['將需要的檔案轉譯到www'])
gulp.task('轉譯node', ['轉譯ls檔'])

gulp.task('default', function() {
  gulp.watch('./src/**/*.ls', ['轉譯web'])
});