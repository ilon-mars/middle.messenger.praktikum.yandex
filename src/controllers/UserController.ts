import { UserAPI } from '@/services/api';
import store from '@/core/Store';
import Router from '@/core/Router';
import AuthController from './AuthController.ts';

import { RouterLinkEnum } from '@/enums';
import { User, UserPasswordData } from '@/types';

class UserController {
  private api = new UserAPI();

  async changeUserData(data: User) {
    try {
      await this.api.changeUserData(data);
      await AuthController.fetchUser();

      store.set('user.error', undefined);

      Router.go(RouterLinkEnum.PROFILE);
    } catch (error: unknown) {
      store.set('user.error', (error as Error).message);
      console.error((error as Error).message);
    }
  }

  async changeUserAvatar(data: FormData) {
    try {
      await this.api.changeUserAvatar(data);
      await AuthController.fetchUser();

      store.set('user.error', undefined);

      Router.go(RouterLinkEnum.PROFILE);
    } catch (error: unknown) {
      store.set('user.error', (error as Error).message);
      console.error((error as Error).message);
    }
  }

  async changeUserPassword(password: UserPasswordData) {
    try {
      await this.api.changeUserPassword(password);
      await AuthController.fetchUser();

      store.set('user.error', undefined);

      Router.go(RouterLinkEnum.PROFILE);
    } catch (error: unknown) {
      store.set('user.error', (error as Error).message);
      console.error((error as Error).message);
    }
  }
}
export default new UserController();
