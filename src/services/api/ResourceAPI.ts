import { API } from './api.service.ts';

export class ResourceAPI extends API {
  constructor() {
    super('/resources');
  }

  public async send(data: FormData) {
    return await this.http.post('/', { data });
  }
}
