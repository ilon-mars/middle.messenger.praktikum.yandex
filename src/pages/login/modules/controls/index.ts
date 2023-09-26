import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';
import { button } from '@/components/button';
import { link } from '@/components/link';
import { LOGIN_BUTTON, LOGIN_LINK } from '@/utils';

export const controls = () => {
  return Handlebars.compile(tmpl)({
    button: button(LOGIN_BUTTON),

    link: link(LOGIN_LINK),
  });
};
