"use strict";

let gulp = require('gulp');
let sass = require('gulp-sass');

sass.compiler = require('node-sass');


gulp.task('sass', function () {
    return gulp.src('./sass/**/style.scss')                   //Компилировать все файлы с расширением .sass в папке sass
        .pipe(sass().on('error', sass.logError))          //Папка назначения для скомпилированного CSS
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', gulp.parallel('sass')); //Паралельный запуск задачи sass
});