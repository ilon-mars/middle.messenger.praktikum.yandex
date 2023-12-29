import store from '@/core/Store';

import { Message, MessageProps } from '@/types';

import { convertDateToTime } from './convertDateToTime';

export const normalizeChatMessage = (message: Message): MessageProps => {
  const isMe = message.user_id === store.state.user?.data.id;

  return { ...message, isMe, time: convertDateToTime(message.time, false) };
};
