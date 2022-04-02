# JavaScript template

[![NPM version][npm-image]][npm-url]
[![Style Guide][style-guide-image]][style-guide-url]
[![Inline docs][docs-image]][docs-url]

[npm-image]: https://img.shields.io/npm/v/@nikolay-borzov/template-javascript.svg
[npm-url]: https://npmjs.org/package/@nikolay-borzov/template-javascript
[style-guide-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-guide-url]: https://standardjs.com
[docs-image]: https://inch-ci.org/github/nikolay-borzov/template-javascript.svg?branch=master
[docs-url]: https://inch-ci.org/github/nikolay-borzov/template-javascript

A template for JavaScript project with essential (IMHO) configuration and dependencies. No transforming or bundling.

# Node.js

- Require version >= 16
- [`type: module`](https://nodejs.org/api/esm.html)
- [`exports`](https://nodejs.org/docs/latest-v12.x/api/packages.html#packages_main_entry_point_export) in addition to `main` field

# Linting

Lint with [ESLint](https://eslint.org). Format with [Prettier](https://prettier.io/) (as part of ESLint linting process)

## Rules set

- [`eslint:recommended`](https://eslint.org/docs/rules/)
- [`plugin:jsdoc/recommended`](https://github.com/gajus/eslint-plugin-jsdoc)
- [`plugin:unicorn/recommended`](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [`prettier-standard/prettier-file`](https://github.com/npetruzzelli/eslint-config-prettier-standard)
- Some sensible overrides (See [`.eslintrc.cjs`](.eslintrc.cjs))

# Testing

Test with [ava](https://github.com/avajs/ava). Tests are in a separate directory.

## Coverage

Collect coverage with [c8](https://github.com/bcoe/c8). [nyc](https://github.com/istanbuljs/nyc) can't be used until [#1353](https://github.com/istanbuljs/nyc/issues/1353) and [1287](https://github.com/istanbuljs/nyc/issues/1287) issues are resolved.

# `pre-commit` hook

Using [lint-staged](https://github.com/okonet/lint-staged) and [husky](https://github.com/typicode/husky):

- Lint staged code and run tests
- Format all supported files with [prettier](https://prettier.io/4)

# `commit-msg` hook

- Lint commit message to be [conventional](https://www.conventionalcommits.org/en/v1.0.0/)

# Configs

Try to keep configs (that uses [cosmiconfig](https://github.com/davidtheclark/cosmiconfig)) inside `package.json` to reduce amount of files in the root.

# `jsconfig.json`

- Define JavaScript project
- Include only `src` and `tests` directories
- Enable type checking on JavaScript files.
- Enable all strict type checking options.
