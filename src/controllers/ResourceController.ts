import store from '@/core/Store';
import { ResourceAPI } from '@/services/api/ResourceAPI';
import { ServerError } from '@/types';

class ResourceController {
  private readonly api = new ResourceAPI();

  sendFile = async (data: FormData) => {
    try {
      await this.api.send(data);

      store.set('resources.error', undefined);
    } catch (error: unknown) {
      store.set('resources.error', (error as ServerError).reason);

      console.error((error as ServerError).reason);
    }
  };
}

export const resourceController = new ResourceController();
