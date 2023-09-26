import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';
import $style from './index.module.sass';

import { NOT_FOUND_LINK, NOT_FOUND_PAGE } from '@/utils';
import { link } from '@/components/link';

export const notFound = () => {
  return Handlebars.compile(tmpl)({
    $style,
    link: link(NOT_FOUND_LINK),
    ...NOT_FOUND_PAGE,
  });
};
