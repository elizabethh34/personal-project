const { src, dest, series, parallel } = require('gulp');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

function htmlTask() {
  return src('src/*.html')
    .pipe(dest('dist'))
}

function stylesTask() {
  return src('src/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(concat('all.css'))
    .pipe(dest('dist/css'))
}

exports.html = htmlTask;
exports.styles = stylesTask;