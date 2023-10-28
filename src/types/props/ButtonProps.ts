import { Block } from '@/core/Block';

import { RouteLink } from '../RouteLink';
import { Attributes } from '../Attributes';

export type ButtonProps = {
  hasText: boolean;
  icon?: Block;
  attrs?: Attributes & { type?: 'submit' | 'button' };
  events?: Record<string, (e?: Event) => void>;
} & Partial<RouteLink>;
