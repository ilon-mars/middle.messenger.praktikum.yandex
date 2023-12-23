import { Block } from '@/core/Block';
import { BlockWithStore } from '@/core/Router';

import { LayoutsList } from './LayoutsList';

export type RoutesList = Record<
  string,
  {
    component: BlockWithStore | Block;
    layout: LayoutsList;
  }
>;
