import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';
import $style from './index.module.sass';

type linkProps = {
  text: string;
  to: string;
};

export const link = (props: linkProps) => {
  return Handlebars.compile(tmpl)({ ...props, $style });
};
