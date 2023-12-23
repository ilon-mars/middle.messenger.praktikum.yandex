/* eslint-disable @typescript-eslint/no-unused-vars */
import router, { prepareRouter } from '@/core/Router';

import AuthController from '@/controllers/AuthController';

import { RouterLinkEnum } from '@/enums';

import '@/assets/styles/index.sass';

document.addEventListener('DOMContentLoaded', async () => {
  prepareRouter();

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case RouterLinkEnum.NOT_FOUND:
    case RouterLinkEnum.LOGIN:
    case RouterLinkEnum.REGISTER:
    case RouterLinkEnum.SERVER_ERROR:
      isProtectedRoute = false;
      break;
    default:
      isProtectedRoute = true;
      break;
  }

  try {
    await AuthController.fetchUser();

    router.start();

    if (isProtectedRoute) {
      router.go(RouterLinkEnum.CHAT);
    }
  } catch (e) {
    router.start();

    if (!isProtectedRoute) {
      router.go(RouterLinkEnum.LOGIN);
    }
  }
});
