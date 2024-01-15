// import { API } from './api.service.ts';

import { User, UserPasswordData } from '@/types/index.ts';

export class UserAPI extends API {
  constructor() {
    super('/user');
  }

  public async changeUserData(data: User) {
    return await this.http.put('/profile', { data });
  }

  public async changeUserAvatar(data: FormData) {
    return await this.http.put('/profile/avatar', { data });
  }

  public async changeUserPassword(data: UserPasswordData) {
    return await this.http.put('/password', { data });
  }

  public async getUser(data: User) {
    return await this.http.get(`/${data.id}`);
  }
}
