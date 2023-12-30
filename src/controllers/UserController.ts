import { UserAPI } from '@/services/api';
import store from '@/core/Store';
import Router from '@/core/Router';
import AuthController from './AuthController.ts';

import { Routes } from '@/enums';
import { ServerError, User, UserPasswordData } from '@/types';

class UserController {
  private api = new UserAPI();

  async changeUserData(data: User) {
    try {
      await this.api.changeUserData(data);
      await AuthController.fetchUser();

      store.set('user.error', undefined);

      Router.go(Routes.SETTINGS);
    } catch (error: unknown) {
      store.set('user.error', (error as ServerError).reason);

      console.error((error as ServerError).reason);
    }
  }

  async changeAvatar(data: FormData) {
    try {
      await this.api.changeUserAvatar(data);
      await AuthController.fetchUser();

      store.set('user.error', undefined);

      Router.go(Routes.SETTINGS);
    } catch (error: unknown) {
      store.set('user.error', (error as ServerError).reason);

      console.error((error as ServerError).reason);
    }
  }

  async changePassword(password: UserPasswordData) {
    try {
      await this.api.changeUserPassword(password);
      await AuthController.fetchUser();

      store.set('user.error', undefined);

      Router.go(Routes.SETTINGS);
    } catch (error: unknown) {
      store.set('user.error', (error as ServerError).reason);

      console.error((error as ServerError).reason);
    }
  }
}
export default new UserController();
