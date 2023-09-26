import { LayoutsList } from './LayoutsList';

export type RoutesList = Record<
  string,
  {
    templateHandler: () => string;
    layout: LayoutsList;
  }
>;
