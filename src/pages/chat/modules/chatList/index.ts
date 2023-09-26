import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';
import $style from './index.module.sass';

import { LinkEnum } from '@/enums';
import { CHATS } from '@/utils';
import { chatItem } from '../chatItem';

export const chatList = () => {
  return Handlebars.compile(tmpl)({
    to: `/${LinkEnum.PROFILE}`,
    chats: CHATS.map(item => chatItem(item)).join(' '),
    $style,
  });
};
