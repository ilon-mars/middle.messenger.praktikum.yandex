import { Block } from '@/core/Block';
import { createApp } from '@/core/createApp';

import { AuthPage } from '@/pages/AuthPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ErrorPage } from '@/pages/ErrorPage';
import { EditPage } from '@/pages/EditPage';
import { MainLayout } from '@/layout/MainLayout';
import { ChatLayout } from '@/layout/ChatLayout';

import { LayoutEnum, LinkEnum } from '@/enums';
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
  [`/${LinkEnum.CHAT}`]: {
    component: new ChatLayout({ isChatSelected: true }),
    layout: LayoutEnum.CHAT,
  },
  [`/${LinkEnum.LOGIN}`]: {
    component: new AuthPage({ title: 'Вход', hasAccount: true }),
    layout: LayoutEnum.MAIN,
  },
  [`/${LinkEnum.NOT_FOUND}`]: {
    component: new ErrorPage({ linkProps: NOT_FOUND_LINK, pageText: NOT_FOUND_PAGE }),
    layout: LayoutEnum.MAIN,
  },
  [`/${LinkEnum.PROFILE}`]: {
    component: new ProfilePage(PROFILE_PAGE),
    layout: LayoutEnum.MAIN,
  },
  [`/${LinkEnum.REGISTER}`]: {
    component: new AuthPage({ title: 'Регистрация', hasAccount: false }),
    layout: LayoutEnum.MAIN,
  },
  [`/${LinkEnum.SERVER_ERROR}`]: {
    component: new ErrorPage({ linkProps: SERVER_ERROR_LINK, pageText: SERVER_ERROR_PAGE }),
    layout: LayoutEnum.MAIN,
  },
  [`/${LinkEnum.EDIT_PROFILE}`]: {
    component: new EditPage({ ...EDIT_PAGE, isPasswordEditing: false }),
    layout: LayoutEnum.MAIN,
  },
  [`/${LinkEnum.EDIT_PASSWORD}`]: {
    component: new EditPage({ ...EDIT_PAGE, isPasswordEditing: true }),
    layout: LayoutEnum.MAIN,
  },
});

document.addEventListener('DOMContentLoaded', () => {
  let component: Block;

  const route = ROUTES[getRouteFromLocation(ROUTES) as keyof typeof ROUTES];

  if (route.layout === LayoutEnum.CHAT) {
    component = route.component;
  } else {
    component = new MainLayout({ content: route.component });
  }

  createApp('#app', component);
});
