import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';
import { chatItem } from '@/pages/chat/modules/chatItem';

import { LinkEnum } from '@/enums';
import { CHATS } from '@/utils';

import $style from './index.module.sass';

export const chatList = () => {
  return Handlebars.compile(tmpl)({
    to: `/${LinkEnum.PROFILE}`,
    chats: CHATS.map(item => chatItem(item)).join(' '),
    $style,
  });
};
