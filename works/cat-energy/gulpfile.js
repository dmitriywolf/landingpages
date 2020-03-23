'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./src/sass/style.scss')                 //Компилировать все файлы с расширением .sass в папке sass
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css/'));                      //Папка назначения для скомпилированного CSS
});


gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.sass', gulp.parallel('sass'));   //Паралельный запуск задачи sass
});

