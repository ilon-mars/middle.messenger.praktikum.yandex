import { LinkEnum } from '@/enums';
import { RoutesList } from '@/types';
import { MAIN_PAGE_ROUTE } from './constants';

export const getRouteFromLocation = (routes: RoutesList) => {
  const route = window.location.pathname;

  if (Object.keys(routes).includes(route)) {
    return route;
  } else if (route === MAIN_PAGE_ROUTE) {
    return `/${LinkEnum.LOGIN}`;
  } else {
    return `/${LinkEnum.NOT_FOUND}`;
  }
};
