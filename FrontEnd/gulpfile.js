var gulp = require('gulp');
var minifyCSS = require('gulp-csso');


gulp.task('css', function(){
  return gulp.src('assets/css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('default', ['css']);