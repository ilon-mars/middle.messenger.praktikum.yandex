import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';
import { message } from '@/pages/chat/modules/message';
import { chatHeader } from '@/pages/chat/modules/chatSection/header';
import { chatFooter } from '@/pages/chat/modules/chatSection/footer';

import { MESSAGES, normalizeChatMessage } from '@/utils';

import $style from './index.module.sass';

export const chatSection = () => {
  return Handlebars.compile(tmpl)({
    header: chatHeader('Иван'),
    footer: chatFooter(),
    messages: MESSAGES.map(item => message(normalizeChatMessage(item))).join(''),
    $style,
  });
};
