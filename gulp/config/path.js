// получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve())
// путь к папке с результатом
const buildFolder = './dist';
// путь к папке с исходниками
const srcFolder = './src';

export const path = { // что бы мы могли юзать эту папку в других файлах
  // все файлы с SRC мы переносим в папку BUILD (dist)
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    fonts: `${buildFolder}/fonts/`,
    images: `${buildFolder}/images/`,
    files: `${buildFolder}/files/`
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/images/**/*.svg`,
    scss: `${srcFolder}/scss/styles.scss`,
    fonts: `${srcFolder}/fonts/`,
    html: `${srcFolder}/*.pug`,
    files: `${srcFolder}/files/**/*.*`,
    svgicons: `${srcFolder}/svgicons/*.svg`
  },
  // /** - проверяем во всех папках
  // *.* - каждый файл
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.pug`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  // указывать папку на удаленном фтп сервере
  ftp: ``
}