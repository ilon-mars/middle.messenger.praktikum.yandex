import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';

import $style from './index.module.sass';

export const chatHeader = (name: string) => {
  return Handlebars.compile(tmpl)({ $style, name });
};
