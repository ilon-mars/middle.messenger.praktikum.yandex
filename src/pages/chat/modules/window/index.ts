import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';
import { windowStub } from '@/pages/chat/modules/windowStub';
import { chatSection } from '@/pages/chat/modules/chatSection';

import $style from './index.module.sass';

export const chatPage = () => {
  return Handlebars.compile(tmpl)({
    $style,
    chat: chatSection(),
    stub: windowStub(),
    chatIsSelected: false,
  });
};
