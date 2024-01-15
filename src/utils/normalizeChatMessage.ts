import store from '@/core/Store/index.ts';

import { Message, MessageProps } from '@/types/index.ts';

import { convertDateToTime } from './convertDateToTime.ts';

export const normalizeChatMessage = (message: Message): MessageProps => {
  const isMe = message.user_id === store.state.user?.data.id;

  return { ...message, isMe, time: convertDateToTime(message.time, false) };
};
