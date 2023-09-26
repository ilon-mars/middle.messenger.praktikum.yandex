import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';
import $style from './index.module.sass';

import { ChatItem } from '@/types';
//
export const chatItem = (props: ChatItem) => {
  return Handlebars.compile(tmpl)({
    ...props,
    $style,
  });
};
