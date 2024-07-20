Проект Cypress с Allure отчетностью и возможностью интеграции в CI

Требования:
Node.js версии 12 или выше
npm (устанавливается вместе с Node.js)
Homebrew (для macOS пользователей)
JAVA (и добавление JAVA_HOME в PATH) для генерации отчётов Allure

-----------------------------------------

1) Установка: 

Шаг 1: Установите Node.js
Скачайте и установите Node.js с официального сайта.

Шаг 2: Установите JAVA
Скачайте и установите JAVA JDK 17 с сайта oracle.com
(если windows, нужно добавить путь до jdk/bin в системный PATH)

Шаг 3: Установите Cypress
Выполните следующую команду в корневой директории вашего проекта для установки Cypress:
npm install cypress --save-dev

Шаг 4: Установите Allure
Установите Allure с помощью Homebrew (только для macOS):
brew install allure

Установите Allure плагин для Cypress:
npm install -D @shelex/cypress-allure-plugin

Шаг 5: Дополнительно прописать npm i
Прописать в корневой папке проекта команду npm i, для установки доп зависимостей

-------------------------------------------

2) Запуск тестов:

Запуск тестов с Allure отчетностью:
npm run test

3) Генерация и просмотр отчетов:

Создание отчета Allure:
После выполнения тестов с включенной отчетностью, выполните следующую команду для генерации отчета:
npm run allure:generate

Открытие отчета в браузере:
Чтобы открыть сгенерированный отчет в браузере, выполните команду:
npm run allure:open




























Устанавливаем nodejs

Устанавливаем cypress
```
npm install cypress --save-dev

...
Добавляем инструмент для отчётности
Устанавливаем Allure

brew install allure
npm i -D @shelex/cypress-allure-plugin

Запустить тесты с allure
npx cypress run --env allure=true

Создать раздел allure отчётов
allure generate allure-results --clean -o allure-report

Открыть отчёт в браузере
allure open