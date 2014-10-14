var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('default', function() {
  // place code for your default task here
      return gulp.src('bower_components/foundation5-sass/scss/*.scss')
        .pipe(sass({sourcemap: true, sourcemapPath: '../scss'}))
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest('css'));
});