var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('sass', function () {
    gulp.src('scss/core.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('css'));
});

gulp.task('browser-sync', function() {
    browserSync.init(["css/*.css", "js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch("scss/*.scss", ['sass']);
});

gulp.task('javascript', function() {
  gulp.src('src/**/*.js')
    .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(plugin1())
      .pipe(plugin2())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});
