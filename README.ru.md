# JavaScript template

[![en](https://img.shields.io/badge/lang-en-%233c3b6e)](./README.md)

[![NPM version][npm-image]][npm-url]
[![Style Guide][style-guide-image]][style-guide-url]
[![Inline docs][docs-image]][docs-url]

[npm-image]: https://img.shields.io/npm/v/@nikolay-borzov/template-javascript.svg
[npm-url]: https://npmjs.org/package/@nikolay-borzov/template-javascript
[style-guide-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-guide-url]: https://standardjs.com
[docs-image]: https://inch-ci.org/github/nikolay-borzov/template-javascript.svg?branch=master
[docs-url]: https://inch-ci.org/github/nikolay-borzov/template-javascript

Шаблон для JavaScript проекта с необходимой (ИМХО) конфигурацией и зависимостями. Без компиляции и сборки.

# Node.js

- Требуется версия >= 20
- [`type: module`](https://nodejs.org/api/esm.html)
- [`exports`](https://nodejs.org/docs/latest-v12.x/api/packages.html#packages_main_entry_point_export) в дополнении к полю `main`

# Статический анализ и форматирование

Статический анализ с помощью [ESLint](https://eslint.org). Форматирование с помощью [Prettier](https://prettier.io/) (как авто-исправления в рамках ESLint процесса).

## Набор правил

- [`eslint:recommended`](https://eslint.org/docs/rules/)
- [`plugin:jsdoc/recommended`](https://github.com/gajus/eslint-plugin-jsdoc)
- [`plugin:unicorn/recommended`](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [`prettier-standard/prettier-file`](https://github.com/npetruzzelli/eslint-config-prettier-standard)
- Некоторые «разумные» переопределения (Смотри [`.eslintrc.cjs`](.eslintrc.cjs))

# Тестирование

Тестирование с помощью [ava](https://github.com/avajs/ava). Файлы тестов хранятся в отдельной директории.

## Покрытие тестами

Сбор покрытия тестами с помощью [c8](https://github.com/bcoe/c8). [nyc](https://github.com/istanbuljs/nyc) не может быть использован пока не решены проблемы [#1353](https://github.com/istanbuljs/nyc/issues/1353) и [1287](https://github.com/istanbuljs/nyc/issues/1287).

# `pre-commit` хук

Используются [lint-staged](https://github.com/okonet/lint-staged) и [husky](https://github.com/typicode/husky).

- При изменении JavaScript файлов:
  - Запускать статический анализ изменённого кода
  - Запускать тесты до первого упавшего теста
- При изменении файла конфигурации ESLint запускать статический анализ всех файлов
- Форматировать все остальные изменённые файлы, поддерживаемые Prettier

# `commit-msg` хук

Проверять сообщения коммита соответствию правилам [conventional](https://www.conventionalcommits.org/en/v1.0.0/)

# Конфигурация инструментов

Конфигурация в отдельных файлах в корне проекта.

# `jsconfig.json`

- Определить JavaScript проект
- Включить только `src` и `tests` директории
- Включить проверку типов в JavaScript файлах
- Включить все строгие проверки типов
