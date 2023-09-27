import { chatPage } from '@/pages/chat/modules/chatWindow';
import { chatList } from '@/pages/chat/modules/chatList';
import { loginPage } from '@/pages/login/index';
import { profilePage } from '@/pages/profile/index';
import { registerPage } from '@/pages/register/index';
import { errorPage } from '@/pages/errorPage';
import { editProfilePage } from '@/pages/editProfile/index';

import mainLayout from '@/layout/main/index.hbs';
import chatLayout from '@/layout/chat/index.hbs';

import { LayoutEnum, LinkEnum } from '@/enums';
import { RoutesList } from '@/types';
import { NOT_FOUND_LINK, NOT_FOUND_PAGE, SERVER_ERROR_LINK, SERVER_ERROR_PAGE, getRouteFromLocation } from '@/utils';

import '@/assets/styles/index.sass';

const ROUTES: RoutesList = Object.freeze({
  [`/${LinkEnum.CHAT}`]: {
    templateHandler: chatPage,
    layout: LayoutEnum.CHAT,
  },
  [`/${LinkEnum.LOGIN}`]: {
    templateHandler: loginPage,
    layout: LayoutEnum.MAIN,
  },
  [`/${LinkEnum.NOT_FOUND}`]: {
    templateHandler: () => errorPage({ linkProps: NOT_FOUND_LINK, pageText: NOT_FOUND_PAGE }),
    layout: LayoutEnum.MAIN,
  },
  [`/${LinkEnum.PROFILE}`]: {
    templateHandler: profilePage,
    layout: LayoutEnum.MAIN,
  },
  [`/${LinkEnum.REGISTER}`]: {
    templateHandler: registerPage,
    layout: LayoutEnum.MAIN,
  },
  [`/${LinkEnum.SERVER_ERROR}`]: {
    templateHandler: () => errorPage({ linkProps: SERVER_ERROR_LINK, pageText: SERVER_ERROR_PAGE }),
    layout: LayoutEnum.MAIN,
  },
  [`/${LinkEnum.EDIT_PROFILE}`]: {
    templateHandler: editProfilePage,
    layout: LayoutEnum.MAIN,
  },
});

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');

  if (root) {
    const component = ROUTES[getRouteFromLocation(ROUTES) as keyof typeof ROUTES];

    if (component.layout === LayoutEnum.CHAT) {
      root.innerHTML = chatLayout({ list: chatList, chat: component.templateHandler });
    } else {
      root.innerHTML = mainLayout({ content: component.templateHandler });
    }
  }
});
