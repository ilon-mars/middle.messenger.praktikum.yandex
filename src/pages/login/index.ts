import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';
import { modal } from '@/components/modal';
import { modalContent } from '@/components/modal/modules/modalContent';
import { modalControls } from '@/components/modal/modules/modalControls';
import { content } from '@/pages/login/modules/content';
import { link } from '@/components/link';

import { LOGIN_LINK } from '@/utils';

export const loginPage = () => {
  return Handlebars.compile(tmpl)({
    modal: modal({
      title: 'Вход',
      content: modalContent({
        content: content(),
      }),
      controls: modalControls({
        controls: link(LOGIN_LINK),
      }),
    }),
  });
};
