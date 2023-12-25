import { API } from '@/services/api';

import { SignInRequest, SignUpRequest, User, ServerError } from '@/types';

export class AuthAPI extends API {
  constructor() {
    super('/auth');
  }

  async signIn(data: SignInRequest) {
    try {
      await this.http.post('/signin', { data });
      return true;
    } catch (e: unknown) {
      const { reason } = e as ServerError;
      throw new Error(reason);
    }
  }

  async signUp(data: SignUpRequest) {
    try {
      await this.http.post('/signup', { data });
      return true;
    } catch (e: unknown) {
      const { reason } = e as ServerError;
      throw new Error(reason);
    }
  }

  async logout() {
    try {
      await this.http.post('/logout');
      return true;
    } catch (e: unknown) {
      throw new Error(e as string);
    }
  }

  async getUser(): Promise<User> {
    return this.http.get('/user') as Promise<User>;
  }
}
