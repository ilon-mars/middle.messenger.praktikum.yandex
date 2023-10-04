import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';

import $style from './index.module.sass';

export const chatFooter = () => {
  return Handlebars.compile(tmpl)({ $style });
};
