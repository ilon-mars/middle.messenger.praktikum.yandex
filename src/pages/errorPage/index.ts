import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';
import { link } from '@/components/link';

import { ErrorPage, RouteLink } from '@/types';

import $style from './index.module.sass';

type errorPageProps = {
  linkProps: RouteLink;
  pageText: ErrorPage;
};

export const errorPage = ({ linkProps, pageText }: errorPageProps) => {
  return Handlebars.compile(tmpl)({
    $style,
    link: link(linkProps),
    ...pageText,
  });
};
