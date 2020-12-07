const { src, dest, series, parallel } = require('gulp');

function htmlTask() {
  return src('src/*.html')
    .pipe(dest('dist'))
}

exports.html = htmlTask;