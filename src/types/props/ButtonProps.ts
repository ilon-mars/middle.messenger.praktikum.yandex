import { Block } from '@/core/Block';

import { RouteLink } from '../RouteLink';
import { Optional } from '../Optional';

type Attributes = {
  type?: 'submit' | 'button';
  [key: string]: string | undefined;
};

export type ButtonProps = {
  icon?: Block;
  attrs?: Attributes[];
  events?: Record<string, () => void>;
} & Optional<RouteLink, 'to'>;
