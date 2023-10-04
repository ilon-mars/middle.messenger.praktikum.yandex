import { ApiMethodEnum } from '@/enums';
import { FetchOptions } from '@/types/FetchOptions';
import { customFetch, queryStringify } from '@/utils';

export class ApiService {
  get = (url: string, options: FetchOptions) => {
    const query = options.data ? queryStringify(options.data) : '';

    return customFetch(`${url}${query}`, { ...options, method: ApiMethodEnum.GET });
  };

  put = (url: string, options: FetchOptions) => {
    return customFetch(url, { ...options, method: ApiMethodEnum.PUT });
  };

  post = (url: string, options: FetchOptions) => {
    return customFetch(url, { ...options, method: ApiMethodEnum.POST });
  };

  delete = (url: string, options: FetchOptions) => {
    return customFetch(url, { ...options, method: ApiMethodEnum.DELETE });
  };
}
