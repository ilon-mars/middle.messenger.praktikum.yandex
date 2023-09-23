import chatPage from './pages/chat/index.hbs';
import loginPage from './pages/login/index.hbs';
import notFound from './pages/notFound/index.hbs';
import profilePage from './pages/profile/index.hbs';
import registerPage from './pages/register/index.hbs';
import serverError from './pages/serverError/index.hbs';

import { LinkEnum } from '@/enums';
import { getRouteFromLocation } from '@/utils';
import { RoutesList } from '@/types';

const ROUTES: RoutesList = Object.freeze({
  [`/${LinkEnum.CHAT}`]: (props: unknown) => chatPage(props),
  [`/${LinkEnum.LOGIN}`]: (props: unknown) => loginPage(props),
  [`/${LinkEnum.NOT_FOUND}`]: (props: unknown) => notFound(props),
  [`/${LinkEnum.PROFILE}`]: (props: unknown) => profilePage(props),
  [`/${LinkEnum.REGISTER}`]: (props: unknown) => registerPage(props),
  [`/${LinkEnum.SERVER_ERROR}`]: (props: unknown) => serverError(props),
});

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');

  if (root) {
    const component = ROUTES[getRouteFromLocation(ROUTES) as keyof typeof ROUTES];

    root.innerHTML = component({});
  }
});
