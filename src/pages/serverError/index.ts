import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';
import $style from './index.module.sass';

import { SERVER_ERROR_LINK, SERVER_ERROR_PAGE } from '@/utils';
import { link } from '@/components/link';

export const serverError = () => {
  return Handlebars.compile(tmpl)({
    $style,
    link: link(SERVER_ERROR_LINK),
    ...SERVER_ERROR_PAGE,
  });
};
