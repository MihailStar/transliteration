/* eslint-disable import/no-extraneous-dependencies */
import gulp from 'gulp';
import { paths } from '../configuration';
import { reloadServer } from './server';
import compileImages from './images';
import compileStyles from './styles';
import compileTemplates from './templates';
import copyScripts from './scripts';
import generateSprite from './sprite';

function watch() {
  const watchFor = {
    images: [compileImages, reloadServer],
    scripts: [copyScripts, reloadServer],
    sprite: [generateSprite],
    styles: [compileStyles],
    templates: [compileTemplates, reloadServer],
  };
  Object.keys(watchFor).forEach((path) => {
    gulp.watch(paths[path].watch, gulp.series(...watchFor[path]));
  });
}

export default watch;
