import gulpStylelint from 'gulp-stylelint';


export const stylelint = () => {
  return app.gulp.src('src/scss/styles.scss')
    .pipe(gulpStylelint({
      failAfterError: false,
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
}
