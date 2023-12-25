import Router from '@/core/Router';
import store from '@/core/Store';
import { AuthAPI } from '@/services/api';
import ChatController from './ChatController';

import { RouterLinkEnum } from '@/enums';
import { SignInRequest, SignUpRequest } from '@/types';

class AuthController {
  private readonly api = new AuthAPI();

  async signIn(data: SignInRequest) {
    try {
      await this.api.signIn(data);
      await this.fetchUser();

      store.set('user.error', undefined);

      await ChatController.fetchChats().catch(err => console.log(err));

      Router.go(RouterLinkEnum.CHAT);
    } catch (error) {
      if ((error as Error)?.message === 'User already in system') {
        Router.go(RouterLinkEnum.CHAT);
      }

      store.set('user.error', (error as Error).message);
      console.error((error as Error).message);
    }
  }

  async signUp(data: SignUpRequest) {
    try {
      await this.api.signUp(data);
      await this.fetchUser();

      store.set('user.error', undefined);

      Router.go(RouterLinkEnum.CHAT);
    } catch (error) {
      store.set('user.error', (error as Error).message);
      console.error((error as Error).message);
    }
  }

  async logout() {
    try {
      await this.api.logout();

      store.set('user', null);

      Router.go(RouterLinkEnum.LOGIN);
    } catch (error) {
      store.set('user.error', error);
      console.error((error as Error).message);
    }
  }

  async fetchUser() {
    const user = await this.api.getUser();

    store.set('user.data', user);
  }
}

export default new AuthController();
