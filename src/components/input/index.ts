import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';

import $style from './index.module.sass';

type inputProps = {
  labelText: string;
  name: string;
  type?: string;
  value?: string;
  errorText?: string;
};

export const input = (props: inputProps) => {
  return Handlebars.compile(tmpl)({ ...props, $style });
};
