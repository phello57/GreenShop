## Включено в сборку по умолчанию
- **Gulp** 
- **Scss\Sass + autoprefixer + clean-css.** Предпроцессор css, все медиа запросы сжимаются в один
- **Pug** Предпроцессор html
- **Imagemin** Оптимизация картинок
- **.webp** jpg, png, jpg преобразует в формат webp, так же в зависимости от браузера выдает класс webp
- **svgSprive.** Сборка всех свг в один файл
- **stylelint.** Линтер


## Организация структуры проекта
- build/ - складывается билд верстки после сборки

- gulp/ - весь функционал сборки

- src/ - рабочая папка
- - html/ - повторяющиеся блоки кода
- - images/ - интерфейсные картинки. При сборке сжимаются и перекладываются в build
- - - content/ - папка с теми изображениями, которые будут меняться
- - js/ - исходники JS-кода
- - - modules/ - Модули для app.js
- - svgicons/ - из всех иконок создается 1 файл

## Таски 
`npm run dev` — Запускает сборку с livereload
`gulp stylelint` — Выведет в консоль все ошибки для src/scss/styles.scss


## Для корректной работы
f1 -> open settings JSON 
"path-autocomplete.pathMappings": {
        "@images": "${folder}/src/images", // allias for images для галпа
        "@scss": "${folder}/src/scss", // allias for scss
        "@js": "${folder}/src/js", // allias for js
    },  
// установить плагин path autocomplite
npm i -D webp-converter@2.2.3 для webpcss

Для замены "@images" этой строки в конечном файле используется регулярка в файле html.js

## Подключение SVG картинок в проект
- - Все свг иконки собираются в 1 файл из srs/svgicons в dist/icons и обращаться к ним по названию файла после #.
- - ПРИМЕР
svg.svg__
    use(xlink:href="images/icons/icons.svg#man") 
- - Для корректной работы шрифтов нужно в srs/fonts загрузить файл с .ttf и .woff
Далее галп создаст в src/scss/ файл fonts.scss в котором будут @font-face