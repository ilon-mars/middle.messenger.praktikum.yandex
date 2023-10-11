import { Block } from '@/core/Block';

import { RouteLink } from '../RouteLink';
import { Optional } from '../Optional';
import { Attributes } from '../Attributes';

export type ButtonProps = {
  icon?: Block;
  attrs?: Attributes & { type?: 'submit' | 'button' };
  events?: Record<string, () => void>;
} & Optional<RouteLink, 'to'>;
