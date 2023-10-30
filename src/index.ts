/* eslint-disable @typescript-eslint/no-unused-vars */
import { Block } from '@/core/Block';
import router from '@/core/Router';

import { AuthPage } from '@/pages/AuthPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ErrorPage } from '@/pages/ErrorPage';
import { EditPage } from '@/pages/EditPage';
import { MainLayout } from '@/layout/MainLayout';
import { ChatLayout } from '@/layout/ChatLayout';

import { LayoutEnum, RouterLinkEnum } from '@/enums';
import { RoutesList } from '@/types';
import {
  EDIT_PAGE,
  NOT_FOUND_LINK,
  NOT_FOUND_PAGE,
  PROFILE_PAGE,
  SERVER_ERROR_LINK,
  SERVER_ERROR_PAGE,
  getRouteFromLocation,
} from '@/utils';

import '@/assets/styles/index.sass';

const ROUTES: RoutesList = Object.freeze({
  [RouterLinkEnum.CHAT]: {
    component: new ChatLayout({ isChatSelected: true }),
    layout: LayoutEnum.CHAT,
  },
  [RouterLinkEnum.LOGIN]: {
    component: new AuthPage({ title: 'Вход', hasAccount: true }),
    layout: LayoutEnum.MAIN,
  },
  [RouterLinkEnum.NOT_FOUND]: {
    component: new ErrorPage({ linkProps: NOT_FOUND_LINK, pageText: NOT_FOUND_PAGE }),
    layout: LayoutEnum.MAIN,
  },
  [RouterLinkEnum.PROFILE]: {
    component: new ProfilePage(PROFILE_PAGE),
    layout: LayoutEnum.MAIN,
  },
  [RouterLinkEnum.REGISTER]: {
    component: new AuthPage({ title: 'Регистрация', hasAccount: false }),
    layout: LayoutEnum.MAIN,
  },
  [RouterLinkEnum.SERVER_ERROR]: {
    component: new ErrorPage({ linkProps: SERVER_ERROR_LINK, pageText: SERVER_ERROR_PAGE }),
    layout: LayoutEnum.MAIN,
  },
  [RouterLinkEnum.EDIT_PROFILE]: {
    component: new EditPage({ ...EDIT_PAGE, isPasswordEditing: false }),
    layout: LayoutEnum.MAIN,
  },
  [RouterLinkEnum.EDIT_PASSWORD]: {
    component: new EditPage({ ...EDIT_PAGE, isPasswordEditing: true }),
    layout: LayoutEnum.MAIN,
  },
});

document.addEventListener('DOMContentLoaded', () => {
  Object.entries(ROUTES).forEach(entry => {
    let component: Block;

    const [path, route] = entry;

    if (route.layout === LayoutEnum.CHAT) {
      component = route.component;
    } else {
      component = new MainLayout({ content: route.component });
    }

    router.use(path, component);
  });

  router.start();
  router.go(getRouteFromLocation(ROUTES));
});
