import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';

import { RouteLink } from '@/types';

import $style from './index.module.sass';

export const link = (props: RouteLink) => {
  return Handlebars.compile(tmpl)({ ...props, $style });
};
