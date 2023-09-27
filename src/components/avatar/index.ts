import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';

import $style from './index.module.sass';

type avatarProps = {
  name: string;
  to: string;
};

export const avatar = (props: avatarProps) => {
  return Handlebars.compile(tmpl)({ ...props, $style });
};
