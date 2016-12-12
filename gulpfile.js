var gulp = require('gulp');
var jsmin = require('gulp-jsmin');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
 
gulp.task('default', function () {
    gulp.src(['src/**/*.js', 'index.js'])
        .pipe(jsmin())
        .pipe(concat('validate-document-checker.min.js'))
        .pipe(gulp.dest('dist'));
});