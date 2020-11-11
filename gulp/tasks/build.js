/* eslint-disable import/no-extraneous-dependencies */
import gulp from 'gulp';
import compileImages from './images';
import compileStyles from './styles';
import compileTemplates from './templates';
import copyScripts from './scripts';

export default gulp.parallel(
  compileImages,
  compileStyles,
  compileTemplates,
  copyScripts,
);
