import { Block } from '@/core/Block/index.ts';
import { BlockWithStore } from '@/core/Router/index.ts';

import { LayoutsList } from './LayoutsList.ts';

export type RoutesList = Record<
  string,
  {
    component: BlockWithStore | Block;
    layout: LayoutsList;
  }
>;
