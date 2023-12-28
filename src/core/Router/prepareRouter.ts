import { Block } from '@/core/Block';
import router, { BlockWithStore } from '@/core/Router';

import { AuthPage } from '@/pages/AuthPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ErrorPage } from '@/pages/ErrorPage';
import { EditPage } from '@/pages/EditPage';
import { MainLayout } from '@/layout/MainLayout';
import { ChatLayout } from '@/layout/ChatLayout';

import { LayoutEnum, RouterLinkEnum } from '@/enums';
import { RoutesList } from '@/types';
import { NOT_FOUND_LINK, NOT_FOUND_PAGE, SERVER_ERROR_LINK, SERVER_ERROR_PAGE } from '@/utils';

const ROUTES: RoutesList = Object.freeze({
  [RouterLinkEnum.CHAT]: {
    component: new ChatLayout(),
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
    component: new ProfilePage({}),
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
    component: new EditPage({ isPasswordEditing: false }),
    layout: LayoutEnum.MAIN,
  },
  [RouterLinkEnum.EDIT_PASSWORD]: {
    component: new EditPage({ isPasswordEditing: true }),
    layout: LayoutEnum.MAIN,
  },
});

export const prepareRouter = () => {
  Object.entries(ROUTES).forEach(entry => {
    let component: Block | BlockWithStore;

    const [path, route] = entry;

    if (route.layout === LayoutEnum.CHAT) {
      component = route.component;
    } else {
      component = new MainLayout({ content: route.component });
    }

    router.use(path, component);
  });

  if (!Object.keys(ROUTES).includes(window.location.pathname)) {
    router.go(RouterLinkEnum.NOT_FOUND);
  }
};
