import { Block } from '@/core/Block';

import { RouteLink } from '../RouteLink';
import { Optional } from '../Optional';

export type ButtonProps = {
  icon?: Block;
  type?: 'submit' | 'button';
  events?: Record<string, () => void>;
} & Optional<RouteLink, 'to'>;
