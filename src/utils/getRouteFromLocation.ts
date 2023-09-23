import { LinkEnum } from '@/enums';
import { RoutesList } from '@/types';

export const getRouteFromLocation = (routes: RoutesList) => {
  return Object.keys(routes).includes(window.location.pathname) ? window.location.pathname : `/${LinkEnum.NOT_FOUND}`;
};
