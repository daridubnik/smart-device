# Smart Device 
Верстка и программирование главной страницы сайта Smart Device

## Ссылки
- [Деплой](https://daridubnik.github.io/smart-device/)
- [Репозиторий](https://github.com/daridubnik/smart-device)
- [Макет](https://www.figma.com/file/se8j6Zlhz4xYjUxYLSepXF/Smart-Device.-%D0%9C%D0%B0%D0%BA%D0%B5%D1%82?type=design&node-id=21711-2&t=CWtqrGaiDIFHQwKz-0)

## Используемые технологии
- HTML5
- методология BEM
- CSS3, SCSS
- Flexbox, Grid Layout
- JavaScript 
- Gulp
- Node.js

## В проекте реализованы
- семантическая, кросс-браузерная и адаптивная верстка по BEM
- оптимизация и ретинизация графики, использование SVG
- интерактивные блоки (аккордеон, форма с валидацией)
- более 90 баллов за показатели производительности, доступности и SEO в Google Lighthouse
- поддержка различных версий браузеров (Chrome, Firefox, Safari) и операционных систем (Android, IOS)
- автоматизация сборки проекта
- проект проходит проверку на валидность w3c-validator 
- код соответствует правилам Stylelint и Eslint
- проект соответствует макету по Piхel Perfect

## Требования заказчика
1. Брейкпоинты
  - 320px - 767px — мобильная версия;
  - 768px - 1023px — планшетная версия;
  - 1024px и выше — десктопная версия.

2. Шапка и Главный блок
  - Шапку на Десктопе нужно сделать фиксированной при скролле.
  - По кнопке `Заказать звонок` открывается модальное окно с формой.
  - Кнопка `Получить бесплатную консультацию` введет плавным скролом к блоку с формой на странице.

3. Блок "Преимущества"
  - На карточках с преимуществами должен быть декоративный ховер при наведении

4. Блок "О компании"
  - По кнопке `Подробнее` должен развернутся полный текст блока.
  - При развернутом тексте кнопка меняет название на `Свернуть` и по клику на нее текст сворачивается.

5. Блок "Товары и Услуги"
  - Карточки Товаров и Услуг кликабельны и ведут на страницы, которых сейчас нет в макете
  - Каждая карточка — целиком обернута в ссылку

6. Форма обратной связи
  - Нам обязательно нужно получить от пользователя контактные данные и согласие на обработку данных. Поле с вопросом не обязательно.
  - В поле телефон должна быть маска формата  `+7(` (при вводе данных появляется закрывающаяся скобка). В поле можно ввести только 10 цифр (мобильный телефон)
  - При открытии модального окна должен стоять фокус на поле Имя

7. Подвал
  - В мобильной версии в подвале нужно оживить Аккордеон.
  - По умолчанию обе вкладки должны быть закрыты.
  - Открыта может быть только одна вкладка. Когда открывается новая вкладка, вторая должна закрыться.
  - Знаки плюс и минус меняют свое состояние при закрытой и открытой вкладке соответственно.

## Краткая инструкция по работе
Для начала работы у вас должент быть установлен **Node.js**

### Основные команды для работы
- Установка - `npm i`
- Запуск локального сервера без минификаций - `npm start`
- Запуск локального сервера c минификациями, <br>
данный вариант не используется в разработке, <br>
он нужен только для тестов производительности <br>
на локальном хосте  - `npm run dev`
- Сборка проекта, минификация скриптов <br>
и оптимизация изображений перед деплоем на прод - `npm run build`
- Запуск тестирования на соответствия кодгайдам - `npm test`
- Создание webp изображений в директории source - `npm run webp`

### Вся разработка ведётся в директории `source`
### Итоговый код попадает в директорию `build`
