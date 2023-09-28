import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';

import $style from './index.module.sass';

type ModalProps = {
  title: string;
  content: string;
  controls: string;
};

export const modal = (props: ModalProps) => {
  return Handlebars.compile(tmpl)({ ...props, $style });
};
