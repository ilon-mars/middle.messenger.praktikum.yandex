import { LinkEnum } from '@/enums';
import { ErrorPage, RouteLink } from '@/types';

export const LOGIN_INPUT = Object.freeze({
  labelText: 'Логин',
  errorText: 'Неверный логин',
  value: '121',
  name: 'login',
});

export const PASSWORD_INPUT = Object.freeze({
  labelText: 'Пароль',
  name: 'password',
});

export const NAME_INPUT = Object.freeze({
  labelText: 'Имя',
  name: 'first_name',
});

export const SECOND_NAME_INPUT = Object.freeze({
  labelText: 'Фамилия',
  name: 'second_name',
});

export const EMAIL_INPUT = Object.freeze({
  labelText: 'Почта',
  name: 'email',
});

export const PHONE_INPUT = Object.freeze({
  labelText: 'Телефон',
  name: 'phone',
});

export const REPEAT_PASSWORD_INPUT = Object.freeze({
  labelText: 'Пароль (еще раз)',
  name: 'repeat_password',
});

export const LOGIN_BUTTON: RouteLink = Object.freeze({
  text: 'Авторизоваться',
  to: `/${LinkEnum.LOGIN}`,
});

export const LOGIN_LINK: RouteLink = Object.freeze({
  text: 'Нет аккаунта?',
  to: `/${LinkEnum.REGISTER}`,
});

export const REGISTER_BUTTON: RouteLink = Object.freeze({
  text: 'Зарегистрироваться',
  to: `/${LinkEnum.REGISTER}`,
});

export const REGISTER_LINK: RouteLink = Object.freeze({
  text: 'Есть аккаунт?',
  to: `/${LinkEnum.LOGIN}`,
});

export const NOT_FOUND_PAGE: ErrorPage = Object.freeze({
  errorNumber: '404',
  text: 'Не туда попали',
});

export const NOT_FOUND_LINK: RouteLink = Object.freeze({
  text: 'Назад к чатам',
  to: `/${LinkEnum.CHAT}`,
});

export const SERVER_ERROR_PAGE: ErrorPage = Object.freeze({
  errorNumber: '500',
  text: 'Мы уже фиксим',
});

export const SERVER_ERROR_LINK: RouteLink = Object.freeze({
  text: 'Назад к чатам',
  to: `/${LinkEnum.CHAT}`,
});

export const PROFILE_INFO_CARDS = [
  {
    caption: 'Логин',
    text: 'ivanivanov',
  },
  {
    caption: 'Имя в чате',
    text: 'Иван',
  },
  {
    caption: 'Имя',
    text: 'Иван',
  },
  {
    caption: 'Фамилия',
    text: 'Иванов',
  },
  {
    caption: 'Почта',
    text: 'pochta@yandex.ru',
  },
  {
    caption: 'Телефон',
    text: '+7 (909) 967 30 30',
  },
];

export const MAIN_PAGE_ROUTE = '/';

export const CHATS = [
  {
    name: 'Андрей',
    text: 'Изображение',
    time: '10:49',
    counter: '2',
  },
  {
    name: 'Андрей',
    text: 'Изображение',
    time: 'Пн',
    counter: '2333',
  },
  {
    name: 'Андрей',
    text: 'Изображение',
    time: '1 мая 2022',
    counter: '2',
  },
  {
    name: 'Андрей',
    text: 'Изображение',
    time: '3 мая 2022',
    counter: '',
  },
];
