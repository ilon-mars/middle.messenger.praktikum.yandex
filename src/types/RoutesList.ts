import { LayoutsList } from './LayoutsList';

export type RoutesList = Record<
  string,
  {
    templateHandler: (props?: unknown) => string;
    layout: LayoutsList;
  }
>;
