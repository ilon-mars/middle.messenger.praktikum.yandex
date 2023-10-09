import { ChatParticipantEnum, LinkEnum, MessageStatusEnum } from '@/enums';
import { ErrorPage, RouteLink } from '@/types';
import { ReceiverMessage, SenderMessage } from '@/types/ChatMessage';

export const ICONS = import.meta.glob('@/assets/icons/*.svg', { as: 'raw', eager: true });

export const LOGIN_INPUT = Object.freeze({
  labelText: 'Логин',
  errorText: 'Неверный логин',
  value: '121',
  name: 'login',
});

export const PASSWORD_INPUT = Object.freeze({
  labelText: 'Пароль',
  name: 'password',
  type: 'password',
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
  type: 'email',
});

export const PHONE_INPUT = Object.freeze({
  labelText: 'Телефон',
  name: 'phone',
  type: 'tel',
});

export const REPEAT_PASSWORD_INPUT = Object.freeze({
  labelText: 'Пароль (еще раз)',
  name: 'repeat_password',
  type: 'password',
});

export const LOGIN_BUTTON: RouteLink = Object.freeze({
  text: 'Авторизоваться',
  to: `/${LinkEnum.CHAT}`,
});

export const LOGIN_LINK: RouteLink = Object.freeze({
  text: 'Нет аккаунта?',
  to: `/${LinkEnum.REGISTER}`,
});

export const REGISTER_BUTTON: RouteLink = Object.freeze({
  text: 'Зарегистрироваться',
  to: `/${LinkEnum.CHAT}`,
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

export const EDIT_PROFILE_INPUTS = [
  {
    labelText: 'Логин',
    name: 'login',
    value: 'ivanivanov',
    errorText: '',
  },
  {
    labelText: 'Имя в чате',
    name: 'display_name',
    value: 'Иван',
    errorText: '',
  },
  {
    labelText: 'Имя',
    name: 'first_name',
    value: 'Иван',
    errorText: '',
  },
  {
    labelText: 'Фамилия',
    name: 'second_name',
    value: 'Иванов',
    errorText: '',
  },
  {
    labelText: 'Почта',
    name: 'email',
    value: 'pochta@yandex.ru',
    errorText: '',
    type: 'email',
  },
  {
    labelText: 'Телефон',
    name: 'phone',
    value: '+7 (909) 967 30 30',
    errorText: '',
    type: 'tel',
  },
];

export const SAVE_PROFILE_BUTTON: RouteLink = Object.freeze({
  text: 'Сохранить',
  to: `/${LinkEnum.PROFILE}`,
});

export const EDIT_PASSWORD_INPUTS: InputProps[] = [
  {
    labelText: 'Старый пароль',
    name: 'oldPassword',
    value: '',
    errorText: '',
  },
  {
    labelText: 'Новый пароль',
    name: 'newPassword',
    value: '',
    errorText: '',
  },
  {
    labelText: 'Повторите новый пароль',
    name: 'newPassword',
    value: '',
    errorText: '',
  },
];

export const MESSAGES: Array<SenderMessage | ReceiverMessage> = [
  {
    type: ChatParticipantEnum.SENDER,
    text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
    time: '15:00',
  },
  {
    type: ChatParticipantEnum.SENDER,
    imageLink: 'http',
    time: '15:20',
  },
  {
    type: ChatParticipantEnum.RECEIVER,
    text: 'Круто!',
    status: MessageStatusEnum.DELIVERED,
    time: '15:40',
  },
  {
    type: ChatParticipantEnum.SENDER,
    text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
    time: '15:00',
  },
  {
    type: ChatParticipantEnum.RECEIVER,
    text: 'Круто!',
    status: MessageStatusEnum.DELIVERED,
    time: '15:40',
  },
  {
    type: ChatParticipantEnum.SENDER,
    text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
    time: '15:00',
  },
  {
    type: ChatParticipantEnum.RECEIVER,
    text: 'Круто!',
    status: MessageStatusEnum.DELIVERED,
    time: '15:40',
  },
];
export const PROFILE_AVATAR: AvatarProps = {
  name: 'Иван',
  to: `/${LinkEnum.EDIT_PROFILE}`,
};

export const EDIT_PAGE: EditPasswordPageProps = {
  goBack: `/${LinkEnum.CHAT}`,
};
