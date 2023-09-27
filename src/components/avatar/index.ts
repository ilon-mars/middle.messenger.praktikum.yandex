import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';

import $style from './index.module.sass';

export const avatar = (name: string) => {
  return Handlebars.compile(tmpl)({ $style, name });
};
