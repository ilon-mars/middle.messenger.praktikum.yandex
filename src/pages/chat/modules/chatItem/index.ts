import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';

import { ChatItem } from '@/types';

import $style from './index.module.sass';

export const chatItem = (props: ChatItem) => {
  return Handlebars.compile(tmpl)({
    ...props,
    $style,
  });
};
