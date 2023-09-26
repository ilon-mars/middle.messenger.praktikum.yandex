import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';
import $style from './index.module.sass';

type ModalProps = {
  controls: string;
};

export const modalControls = (props: ModalProps) => {
  return Handlebars.compile(tmpl)({ ...props, $style });
};
