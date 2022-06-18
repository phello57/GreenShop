## Cборка
- **Gulp** 
- **Scss\Sass + autoprefixer + clean-css.** Предпроцессор css, все медиа запросы сжимаются в один
- **Pug** Предпроцессор html
- **Imagemin** Оптимизация картинок
- **webp** jpg, png, jpg преобразует в формат webp, так же в зависимости от браузера выдает класс webp
- **svgSprive** Сборка всех свг в один файл
- **stylelint** Линтер

## Организация
- dist/ - складывается билд верстки после сборки

- gulp/ - весь функционал сборки

- src/ - рабочая папка
- - html/ - блоки кода
- - images/ - интерфейсные картинки. При сборке сжимаются
- - - content/ - папка с теми изображениями, которые будут меняться
- - js/ - исходники JS-кода
- - - modules/ - Модули для app.js
- - svgicons/ - svgSprite

## Таски 
`npm run dev` — Запускает сборку с livereload
`npm run stylelint:fix` — Пофиксит все ошибки во всех файлах src/scss/*.scss

## Подключение svg
СВГ собираются 1 файлом в dist/icons и обращаться к ним по названию файла после #
svg.svg__                                  
    use(xlink:href="images/icons/icons.svg#name")
                                          ^
Для корректной работы шрифтов нужно в srs/fonts загрузить файл с .ttf и .woff
Далее галп создаст в src/scss/ файл fonts.scss в котором будут @font-face