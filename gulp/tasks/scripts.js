/* eslint-disable import/no-extraneous-dependencies */
import gulp from 'gulp';
import { paths } from '../configuration';

function copyScripts() {
  return gulp
    .src(paths.scripts.src)
    .pipe(gulp.dest(paths.scripts.dest));
}

export default copyScripts;
