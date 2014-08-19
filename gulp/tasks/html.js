var gulp = require('gulp');

// Plugins
var templateCache = require('gulp-angular-templatecache');

// Utils
var path = require('path');

var templates = {
  src: ['./app/html/**/*.html'],
  dst: path.resolve('dist', 'js')
};

gulp.task('templates', ['clean'], function () {
  return gulp.src(templates.src)
    .pipe(templateCache({
      root:   'html',
      module: 'app'
    }))
    // .pipe(streamify())
    .pipe(gulp.dest(templates.dst));
});
