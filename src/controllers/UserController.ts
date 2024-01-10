import Router from '@/core/Router/index.ts';
import store from '@/core/Store/index.ts';

import { UserAPI } from '@/services/api/index.ts';

import AuthController from './AuthController.ts';

import { Routes } from '@/enums/index.ts';
import { ServerError, User, UserPasswordData } from '@/types/index.ts';

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
