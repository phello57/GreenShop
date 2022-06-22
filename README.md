## Чем полезна сборка
index.min.html
styles.min.css
app.min.js
.webp в зависимости от браузера
svgSprite
stylelint
Подключение шрифтов

## Таски 
`npm run dev` — Запускает сборку с livereload
`npm run stylelint:fix` — Пофиксит все ошибки во всех файлах src/scss/*.scss 

## Организация
dist - сборка
gulp
src - рабочая папка
html
scss
fonts
svgicons - все svg иконки
images
    /content - папка с теми изображениями, которые будут меняться
js
    /modules - Модули для app.js

## Svg
svg.svg__
    use(xlink:href="images/icons/icons.svg#name")
                                          ^^^^^
## Шрифты
Нужно в srs/fonts загрузить .ttf и .woff
Создастся файл в src/scss/ fonts.scss с @font-face