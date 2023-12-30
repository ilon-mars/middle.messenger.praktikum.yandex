import { convertDateToTime } from './convertDateToTime';
import { getAvatarSrc } from './getAvatarSrc';

import { Chat, ChatItemProps } from '@/types';

import avatarSrc from '@/assets/icons/avatar-stub.svg';

export const normalizeChats = (chats: Chat[]): ChatItemProps[] =>
  chats.map(chat => {
    return {
      id: chat.id,
      name: chat.title,
      text: chat.last_message ? chat.last_message.content : chat.last_message,
      avatarUrl: chat.avatar ? getAvatarSrc(chat.avatar) : avatarSrc,
      time: chat.last_message ? convertDateToTime(chat.last_message.time) : null,
      counter: chat.unread_count,
    };
  });
