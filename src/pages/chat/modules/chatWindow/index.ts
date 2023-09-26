import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';
import $style from './index.module.sass';

export const chatPage = () => {
  return Handlebars.compile(tmpl)({ $style });
};
