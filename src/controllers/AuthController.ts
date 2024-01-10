import Router from '@/core/Router/index.ts';
import store from '@/core/Store/index.ts';

import { AuthAPI } from '@/services/api/index.ts';

import ChatController from './ChatController.ts';
import UserController from './UserController.ts';

import { Routes } from '@/enums/index.ts';
import { SignInRequest, SignUpRequest } from '@/types/index.ts';

class AuthController {
  private readonly api = new AuthAPI();

  async signIn(data: SignInRequest) {
    try {
      await this.api.signIn(data);
      await this.fetchUser();

      store.set('user.error', undefined);

      await ChatController.fetchChats();

      Router.go(Routes.MESSENGER);
    } catch (error) {
      if ((error as Error)?.message === 'User already in system') {
        Router.go(Routes.MESSENGER);
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

      Router.go(Routes.MESSENGER);
    } catch (error) {
      store.set('user.error', (error as Error).message);
      console.error((error as Error).message);
    }
  }

  async logout() {
    try {
      await this.api.logout();

      store.set('user', null);

      Router.go(Routes.MAIN);
    } catch (error) {
      store.set('user.error', error);
      console.error((error as Error).message);
    }
  }

  async fetchUser() {
    const user = await this.api.getUser();

    if (!user.display_name) {
      await UserController.changeUserData({ ...user, display_name: user.first_name });
    }

    store.set('user.data', user);
    return user;
  }
}

export default new AuthController();
