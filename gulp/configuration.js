/* eslint-disable import/no-extraneous-dependencies */
import imagemin from 'gulp-imagemin';

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const directory = {
  src: './src',
  dest: './dist',
};

const paths = {
  archive: {
    src: `${directory.dest}/**/*.*`,
    dest: directory.dest,
    watch: '',
  },
  deploy: {
    src: `${directory.dest}/**/*.*`,
    dest: '',
    watch: '',
  },
  images: {
    src: [
      `${directory.src}/images/**/*.{gif,ico,jpg,png,svg,webp}`,
      `!${directory.src}/images/sprite/**/*.svg`,
    ],
    dest: `${directory.dest}/images`,
    get watch() {
      return this.src;
    },
  },
  scripts: {
    src: `${directory.src}/scripts/**/*.js`,
    dest: `${directory.dest}/scripts`,
    get watch() {
      return this.src;
    },
  },
  sprite: {
    src: `${directory.src}/images/sprite/**/*.svg`,
    dest: `${directory.dest}/images/sprite`,
    get watch() {
      return this.src;
    },
  },
  styles: {
    src: `${directory.src}/styles/main.scss`,
    dest: `${directory.dest}/styles`,
    watch: [
      `${directory.src}/styles/**/*.scss`,
      `${directory.src}/blocks/**/*.scss`,
    ],
  },
  templates: {
    src: `${directory.src}/*.pug`,
    dest: `${directory.dest}`,
    watch: [
      `${directory.src}/*.pug`,
      `${directory.src}/templates/**/*.pug`,
      `${directory.src}/blocks/**/*.pug`,
    ],
  },
};

const imageminConfig = [
  imagemin.gifsicle({
    interlaced: true,
  }),
  imagemin.jpegtran({
    progressive: true,
  }),
  imagemin.optipng({
    optimizationLevel: 5,
  }),
  imagemin.svgo({
    plugins: [
      {
        removeViewBox: false,
      },
    ],
  }),
];

export { isDevelopment, directory, paths, imageminConfig };
