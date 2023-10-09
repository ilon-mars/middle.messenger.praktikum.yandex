import { Block } from '@/core/Block';
import { LayoutsList } from './LayoutsList';

export type RoutesList = Record<
  string,
  {
    component: Block;
    layout: LayoutsList;
  }
>;
