import { Block } from '@/core/Block';

import { Attributes } from '../Attributes';
import { Events } from '../Events';

export type ButtonProps = {
  hasText: boolean;
  icon?: Block;
  attrs?: Attributes & { type?: 'submit' | 'button' };
  events?: Events;
  text?: string;
};
