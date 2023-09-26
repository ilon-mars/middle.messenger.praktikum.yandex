import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';
import $style from './index.module.sass';

type buttonProps = {
  text: string;
  to: string;
};

export const button = (props: buttonProps) => {
  return Handlebars.compile(tmpl)({ ...props, $style });
};
