import include from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";
import pug from "gulp-pug";

export const html = () => {
  return app.gulp.src(app.path.src.html)
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: "HTML",
      message: "Error: <%= error.message %>"
    })
  ))
  .pipe(pug({
    pretty: true,
    verbose: true,
  }))
  // уменьшает вес изображений и меняет формат
  .pipe(webpHtmlNosvg())

  // стили сохранаются в хеше и не обновляются при дополнении проекта.
  // что бы не очищать хеш ручками, ниже добавляет к файлам ключ
  .pipe(
    versionNumber({
      'value': '%DT%',
      'append': {
        'key': '_v',
        'cover': 0,
        'to': [
          'css',
          'js',
        ]
      },
      'output': {
        'file': 'gulp/version.json'
      }
    })
  )
  // Раскомментировать для удаления пробелов в конечном html

  .pipe(htmlmin({
    collapseWhitespace: true
  }))
  .pipe(app.gulp.dest("dist"))
  .pipe(app.plugins.browsersync.stream())
}
