import router, { prepareRouter } from '@/core/Router';

import AuthController from '@/controllers/AuthController';

import { Routes } from '@/enums';

import '@/assets/styles/index.sass';

document.addEventListener('DOMContentLoaded', async () => {
  prepareRouter();

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.NOT_FOUND:
    case Routes.SIGN_UP:
    case Routes.SERVER_ERROR:
      isProtectedRoute = false;
      break;
    default:
      isProtectedRoute = true;
      break;
  }

  router.start();

  try {
    const user = await AuthController.fetchUser();

    if (!isProtectedRoute || user.id) {
      router.go(Routes.MESSENGER);
    }
  } catch (e) {
    if (isProtectedRoute) {
      router.go(Routes.MAIN);
    }
  }
});
