import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';
import { button } from '@/components/button';
import { link } from '@/components/link';
import { REGISTER_BUTTON, REGISTER_LINK } from '@/utils';

export const controls = () => {
  return Handlebars.compile(tmpl)({
    button: button(REGISTER_BUTTON),

    link: link(REGISTER_LINK),
  });
};
