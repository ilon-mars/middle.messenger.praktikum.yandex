import { API } from '@/services/api';

export class ResourceAPI extends API {
  constructor() {
    super('/resources');
  }

  public async send(data: FormData) {
    return await this.http.post('/', { data });
  }
}
