import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';
import { icon } from '@/components/icon';

import { RouteLink } from '@/types';

import $style from './index.module.sass';

type ButtonProps = {
  hasIcon: boolean;
} & RouteLink;

export const button = (props: ButtonProps) => {
  return Handlebars.compile(tmpl)({
    ...props,
    icon: icon('arrow-tail'),
    $style,
  });
};
