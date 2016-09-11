# 此專案用來開發本機Http Server用

## 使用gulp  
為了方便開發src/web中的檔案都被```browserify```到[../www/build/js](../www/build/js)中  
src中的其它檔案就被當成普通的nodejs程式碼  
注意下方程式碼當中的"轉譯web"、"轉譯node"這兩個task  

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

## WWW資料夾
web前台開發的資料夾

## 啟動Server
    cd /dst/to/HankWork/dev/node
    node server.js