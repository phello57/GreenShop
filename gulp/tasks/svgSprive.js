import svgSprite from "gulp-svg-sprite"

export const svgSprive = () => {
  return app.gulp.src(app.path.src.svgicons)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "svg",
        message: "Error: <%= error.message %>"
      })
    ))
    //.pipe(app.plugins.replace(/[fill="]....["]/g," "))
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: `../icons/icons.svg`
        }
      },
    }
    ))
    .pipe(app.gulp.dest(app.path.build.images)) 
    .pipe(app.plugins.browsersync.stream())
}