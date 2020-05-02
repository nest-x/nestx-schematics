# nestx-schematics

Nest architecture element generation based on Nest-X schematics. (TypeScript Support Only)

[![NPM](https://img.shields.io/npm/v/nestx-schematics.svg)](https://www.npmjs.com/package/nestx-schematics) [![Workflow](https://github.com/nest-x/nestx-schematics/workflows/ci/badge.svg)](https://github.com/nest-x/nestx-schemantics) [![Codecov](https://codecov.io/gh/nest-x/nestx-amqp/branch/master/graph/badge.svg)](https://codecov.io/gh/nest-x/nestx-amqp) [![Semantic-Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Description

It will override

## Concerns

### Code Styles

- bundled with `prettier + eslint + eslint-typescript` support
- bundled with `husky` and `pretty-quick` in git hooks
- using config written in `package.json` instead of single configuration file
- using `__tests__` an `jest` style test file suffix

## Features

> PR Welcome

- [x] Application
- [ ] Class
- [ ] Configuration
- [ ] Controller
- [ ] Decorator
- [ ] Interceptor
- [ ] Library
- [ ] Service

## Usage

### Create Nest Application with `@nestjs/cli`

> Pre-require suite: Ensure you installed `@nestjs/cli` globally first. If not, please run `npm i @nestjs/cli -g` or `yarn global add @nestjs/cli` first

**Note**

You must install the latest version `nestx-schematics` globally at your local then it can be found by `@nestjs/cli`.

```bash
yarn global add nestx-schematics
nest g -c nestx-schematics application <your-app-name>
```

### Create New Nest Component on existing Nest Application

> Currently, not support
