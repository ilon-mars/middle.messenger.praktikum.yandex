import { ApiMethodEnum } from '@/enums';
import { ApiServiceMethod } from '@/types';
import { customFetch, queryStringify } from '@/utils';

export class ApiService {
  get: ApiServiceMethod = (url, options = {}) => {
    const query = options.data ? queryStringify(options.data) : '';

    return customFetch(`${url}${query}`, { ...options, method: ApiMethodEnum.GET });
  };

  put: ApiServiceMethod = (url, options = {}) => {
    return customFetch(url, { ...options, method: ApiMethodEnum.PUT });
  };

  post: ApiServiceMethod = (url, options = {}) => {
    return customFetch(url, { ...options, method: ApiMethodEnum.POST });
  };

  delete: ApiServiceMethod = (url, options = {}) => {
    return customFetch(url, { ...options, method: ApiMethodEnum.DELETE });
  };
}
