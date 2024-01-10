import { Block } from '@/core/Block/index.ts';

import { Attributes } from '../Attributes.ts';
import { Events } from '../Events.ts';

export type ButtonProps = {
  hasText: boolean;
  icon?: Block;
  attrs?: Attributes & { type?: 'submit' | 'button' };
  events?: Events;
  text?: string;
};
