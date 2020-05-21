const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

function transpileAndCompress() {
  return gulp.src('./*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'))
}

function minifyCSS() {
  return gulp.src('./*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist'));
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
    .pipe(gulp.dest('./dist'));
}

exports.default = function() {
  gulp.watch('./*.css', minifyCSS);
  gulp.watch('./*.js', transpileAndCompress);
  gulp.watch('index.html', copyHTML);
  minifyCSS();
  transpileAndCompress();
  copyHTML();
  sync();
};