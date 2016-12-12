var gulp = require('gulp'),
	concatCSS = require('gulp-concat-css'),
	cssmin = require('gulp-cssmin'),
	autoprefixer = require('gulp-autoprefixer'),
	rename = require('gulp-rename');


gulp.task('default', function () {
  return gulp.src('app/css/*.css')
    .pipe(concatCSS('bundle.css'))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
	.pipe(cssmin('bundle.css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css/'));

});

gulp.task('watch', function () {
	gulp.watch('css/*.css', ['default'])
})