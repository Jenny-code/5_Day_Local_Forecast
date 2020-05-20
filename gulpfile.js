const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

function transpileAndCompress() {
  return gulp.src('source/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
}

function minifyCSS() {
  return gulp.src('source/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'));
}

function sync() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
}

function copyHTML() {
  return gulp.src('index.html')
    .pipe(gulp.dest('dist'));
}

exports.default = function() {
  gulp.watch('source/*.css', minifyCSS);
  gulp.watch('source/*.js', transpileAndCompress);
  gulp.watch('index.html', copyHTML);
  minifyCSS();
  transpileAndCompress();
  copyHTML();
  sync();
};