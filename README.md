# Чат

[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/labstack/echo/echo.yml?style=flat-square)](https://github.com/ilon-mars/middle.messenger.praktikum.yandex/actions)
![Tests](https://github.com/ilon-mars/middle.messenger.praktikum.yandex/actions/workflows/tests.yml/badge.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/73d55498-3f50-413f-a23d-bac0fea198df/deploy-status)](https://app.netlify.com/sites/yup-messenger/deploys)

Макет в [Figma](https://www.figma.com/file/0Ml1QvPEw8h1pCWLkbJ5Xk/%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D1%83%D0%BC-%7C-%D0%A7%D0%B0%D1%82?type=design&node-id=0%3A1&mode=design&t=7ZA2au6qNjBZhtLF-1)

Задеплоенный проект на [Netlify](https://yup-messenger.netlify.app/)

## Описание

Самостоятельная практическая работа в рамках курса. Тема работы: чат.

## Установка

Сборка проекта. Используемый сборщик [Vite](https://vitejs.dev/):

```bash
yarn build
```

Сборка и запуск проекта:

```bash
yarn start
```

Запуск проекта в режиме разработки:

```bash
yarn dev
```

Запуск линтера с фиксом ошибок:

```bash
yarn lint
```

Запуск проверки типов tsc:

```bash
yarn typecheck
```

Запуск проверки stylelint:

```bash
yarn stylelint
```

Запуск тестов:

```bash
yarn test
```

### Ссылки на страницы:

- [Логин](https://yup-messenger.netlify.app/)
- [Регистрация](https://yup-messenger.netlify.app/sign-up)
- [Чат](https://yup-messenger.netlify.app/messenger)
- [Профиль](https://yup-messenger.netlify.app/settings)
- [Изменить пароль](https://yup-messenger.netlify.app/settings/edit-password)
- [Изменить профиль](https://yup-messenger.netlify.app/edit-profile)
- [500](https://yup-messenger.netlify.app/500)
- [Несуществующая страница(400)](https://yup-messenger.netlify.app/400)

### Используемые технологии
- Vite
- Typescript
- Sass modules
- Handlebars
- Mocha + chai + sinon
