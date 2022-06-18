// основной модуль
import gulp from "gulp";
// Импорт путей
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js"
// передаем значения в глобальную переменную
global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins
};
// импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";
import { otfToTtf,ttfToWoff,fontsStyle } from "./gulp/tasks/fonts.js";

// Наблюдатель за изменениями в файлах
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
  // gulp.watch(path.watch.svgSprive, svgSprive);
};

// export { svgSprive }

// Шрифты
const fonts = gulp.series(otfToTtf,ttfToWoff,fontsStyle)
// Построение сценариев выполнения задач 
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images,svgSprive));
// *series выполняет функции последовательно
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
// Выполнение сценария по умолчанию
gulp.task("default", dev);