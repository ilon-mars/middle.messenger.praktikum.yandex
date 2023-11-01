import { API } from './api.service';
import { SignInRequest, SignUpRequest, SignUpResponse, User } from '@/types';

export class AuthAPI extends API {
  constructor() {
    super('/auth');
  }

  async signIn(data: SignInRequest): Promise<unknown> {
    return this.http.post('/signin', { data });
  }

  async signUp(data: SignUpRequest): Promise<SignUpResponse> {
    return this.http.post('/signup', { data }) as Promise<SignUpResponse>;
  }

  async logout(): Promise<unknown> {
    return this.http.post('/logout');
  }

  async getUser(): Promise<User> {
    return this.http.get('/user') as Promise<User>;
  }
}
