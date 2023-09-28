import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';
import { modal } from '@/components/modal';
import { modalContent } from '@/components/modal/modules/modalContent';
import { modalControls } from '@/components/modal/modules/modalControls';
import { content } from '@/pages/register/modules/content';
import { link } from '@/components/link';

import { REGISTER_LINK } from '@/utils';

export const registerPage = () => {
  return Handlebars.compile(tmpl)({
    modal: modal({
      title: 'Регистрация',
      content: modalContent({
        content: content(),
      }),
      controls: modalControls({
        controls: link(REGISTER_LINK),
      }),
    }),
  });
};
