var gulp = require('gulp')
var gulpPlumber = require('gulp-plumber');
var gutil = require('gulp-util')
var browserify = require('gulp-browserify');
var elm  = require('gulp-elm');

gulp.task('elm-init', elm.init);

gulp.task('轉譯單個elm檔', function() {
  return gulp.src('./src/**/*.elm')
    .pipe(gulpPlumber({
      errorHandler: function (err) {
        this.emit('end');
      }
    }))
    .pipe(elm({filetype: "js"}))
    .on('error', gutil.log)
    .pipe(gulp.dest('./'))
});

gulp.task('轉譯所有web/elm檔', ['elm-init'], function(){
  return gulp.src('src/web/**/*.elm')
    .pipe(gulpPlumber({
      errorHandler: function (err) {
        this.emit('end');
      }
    }))
    .pipe(elm.bundle('elm-main.js'))
	.on('error', gutil.log)
    .pipe(gulp.dest('./web/'));
});

gulp.task('將需要的檔案轉譯到www', ['轉譯所有web/elm檔'], function(){
  return gulp.src('./web/*.js')
    //.pipe(browserify())
    .pipe(gulp.dest('../www/build/js/'))
})

gulp.task('轉譯web', ['將需要的檔案轉譯到www'])
gulp.task('轉譯node', ['轉譯所有web/elm檔'])

gulp.task('default', function() {
	gutil.log("start watch")
  gulp.watch('./src/**/*.elm', ['轉譯web'])
});