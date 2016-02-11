var gulp = require('gulp'),
	stylus = require('gulp-stylus');

gulp.task('stylus', function () {
  return gulp.src('./stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./css/'));
});
	
	
gulp.task('stylus:watch', function () {
  gulp.watch('stylus/*.styl', ['stylus']);
});
gulp.task('default', ['stylus','stylus:watch']);
