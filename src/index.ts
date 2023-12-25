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
    case RouterLinkEnum.REGISTER:
    case RouterLinkEnum.SERVER_ERROR:
      isProtectedRoute = false;
      break;
    default:
      isProtectedRoute = true;
      break;
  }

  router.start();

  try {
    await AuthController.fetchUser();

    if (!isProtectedRoute) {
      router.go(RouterLinkEnum.CHAT);
    }
  } catch (e) {
    if (isProtectedRoute) {
      router.go(RouterLinkEnum.LOGIN);
    }
  }
});
