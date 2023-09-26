import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';
import { input } from '@/components/input';
import { LOGIN_INPUT, PASSWORD_INPUT } from '@/utils';

export const content = () => {
  return Handlebars.compile(tmpl)({
    loginInput: input(LOGIN_INPUT),

    passwordInput: input(PASSWORD_INPUT),
  });
};
