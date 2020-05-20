const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

function transpileAndCompress() {
  return gulp.src('source/js/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
}

function minifyCSS() {
  return gulp.src('source/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'));
}

function sync() {
  browserSync.init({
    server: {
      baseDir: "dist"
    }
  });
}

function copyHTML() {
  return gulp.src('index.html')
    .pipe(gulp.dest('dist'));
}

exports.default = function() {
  gulp.watch('source/css/*.css', minifyCSS);
  gulp.watch('source/js/*.js', transpileAndCompress);
  gulp.watch('source/index.html', copyHTML);
  minifyCSS();
  transpileAndCompress();
  copyHTML();
  sync();
};