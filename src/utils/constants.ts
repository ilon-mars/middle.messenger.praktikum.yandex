import { Routes, UploadAvatarStateEnum } from '@/enums';
import { ErrorPageContent, RouteLink, ProfileCardTemplate, ButtonProps } from '@/types';

export const ICONS = import.meta.glob('@/assets/icons/*.svg', { as: 'raw', eager: true });

export const LOGIN_INPUT = Object.freeze({
  labelText: 'Логин',
  errorText: 'Логин может содержать только латиницу, цифры и -',
  value: '',
  name: 'login',
});

export const PASSWORD_INPUT = Object.freeze({
  labelText: 'Пароль',
  name: 'password',
  type: 'password',
  errorText: 'Пароль должен быть от 8 до 40 символов, содержать заглавную букву и цифру',
});

export const NAME_INPUT = Object.freeze({
  labelText: 'Имя',
  name: 'first_name',
  errorText: 'Должно начинаться с заглавной буквы, длина от 3 до 20 символов',
});

export const SECOND_NAME_INPUT = Object.freeze({
  labelText: 'Фамилия',
  name: 'second_name',
  errorText: 'Должно начинаться с заглавной буквы, длина от 3 до 20 символов',
});

export const EMAIL_INPUT = Object.freeze({
  labelText: 'Почта',
  name: 'email',
  type: 'email',
  errorText: 'Неверный формат почты',
});

export const PHONE_INPUT = Object.freeze({
  labelText: 'Телефон',
  name: 'phone',
  type: 'tel',
  errorText: 'Введите телефон цифрами без спец символов, от 10 до 15 символов',
});

export const REPEAT_PASSWORD_INPUT = Object.freeze({
  labelText: 'Пароль (еще раз)',
  name: 'repeat_password',
  type: 'password',
  errorText: 'Неверный пароль',
});

export const OLD_PASSWORD_INPUT = Object.freeze({
  labelText: 'Старый пароль',
  name: 'oldPassword',
  type: 'password',
  errorText: 'Неверный пароль',
});

export const NEW_PASSWORD_INPUT = Object.freeze({
  labelText: 'Новый пароль',
  name: 'newPassword',
  type: 'password',
  errorText: 'Пароль должен содержать от 8 до 40 символов, заглавную букву и цифру',
});

export const REPEAT_NEW_PASSWORD_INPUT = Object.freeze({
  labelText: 'Повторите новый пароль',
  name: 'newPassword',
  type: 'password',
  errorText: 'Пароль должен содержать от 8 до 40 символов, заглавную букву и цифру',
});

export const DISPLAY_NAME_INPUT = Object.freeze({
  labelText: 'Имя в чате',
  name: 'display_name',
  value: 'Иван',
  errorText: 'Должно начинаться с большой буквы',
});

export const LOGIN_BUTTON: ButtonProps = Object.freeze({
  hasText: true,
  text: 'Авторизоваться',
});

export const LOGIN_LINK: RouteLink = Object.freeze({
  text: 'Нет аккаунта?',
  to: Routes.SIGN_UP,
});

export const REGISTER_BUTTON: ButtonProps = Object.freeze({
  hasText: true,
  text: 'Зарегистрироваться',
});

export const REGISTER_LINK: RouteLink = Object.freeze({
  text: 'Есть аккаунт?',
  to: Routes.MAIN,
});

export const NOT_FOUND_PAGE: ErrorPageContent = Object.freeze({
  errorNumber: '404',
  text: 'Не туда попали',
});

export const NOT_FOUND_LINK: RouteLink = Object.freeze({
  text: 'Назад к чатам',
  to: Routes.MESSENGER,
});

export const SERVER_ERROR_PAGE: ErrorPageContent = Object.freeze({
  errorNumber: '500',
  text: 'Мы уже фиксим',
});

export const SERVER_ERROR_LINK: RouteLink = Object.freeze({
  text: 'Назад к чатам',
  to: Routes.MESSENGER,
});

export const PROFILE_INFO_CARDS: ProfileCardTemplate[] = [
  {
    caption: 'Логин',
    text: 'ivanivanov',
    slug: 'login',
  },
  {
    caption: 'Имя в чате',
    text: 'Иван',
    slug: 'display_name',
  },
  {
    caption: 'Имя',
    text: 'Иван',
    slug: 'first_name',
  },
  {
    caption: 'Фамилия',
    text: 'Иванов',
    slug: 'second_name',
  },
  {
    caption: 'Почта',
    text: 'pochta@yandex.ru',
    slug: 'email',
  },
  {
    caption: 'Телефон',
    text: '+7 (909) 967 30 30',
    slug: 'phone',
  },
];

export const SAVE_PROFILE_BUTTON = Object.freeze({
  hasText: true,
  text: 'Сохранить',
});

export const GO_TO_PROFILE: RouteLink = Object.freeze({
  text: 'Профиль',
  to: Routes.SETTINGS,
});

export const EDIT_PROFILE: RouteLink = Object.freeze({
  text: 'Изменить данные',
  to: Routes.EDIT_PROFILE,
});

export const EDIT_PASSWORD: RouteLink = Object.freeze({
  text: 'Изменить пароль',
  to: Routes.EDIT_PASSWORD,
});

export const LOGOUT: RouteLink = Object.freeze({
  text: 'Выйти',
  to: Routes.MAIN,
});

export const UPLOAD_AVATAR = Object.freeze({
  hasText: true,
  text: 'Поменять',
});

export const UPLOAD_AVATAR_STATE_TITLES = Object.freeze({
  [UploadAvatarStateEnum.START]: 'Загрузите файл',
  [UploadAvatarStateEnum.UPLOADED]: 'Файл загружен',
  [UploadAvatarStateEnum.ERROR]: 'Ошибка, попробуйте еще раз',
});

export const ADD_CHAT = Object.freeze({
  hasText: true,
  text: 'Создать чат',
});

export const ADD_USER_TO_CHAT = Object.freeze({
  hasText: true,
  text: 'Добавить пользователя',
});

export const REMOVE_USER_FROM_CHAT = Object.freeze({
  hasText: true,
  text: 'Удалить пользователя',
});
