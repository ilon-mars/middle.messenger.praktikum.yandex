import { HTTPService } from '@/services/http.service.ts';

export abstract class API {
  protected http: HTTPService;

  protected constructor(endpoint: string) {
    this.http = new HTTPService(endpoint);
  }
}
