import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';
import $style from './index.module.sass';

type ModalProps = {
  content: string;
};

export const modalContent = (props: ModalProps) => {
  return Handlebars.compile(tmpl)({ ...props, $style });
};
