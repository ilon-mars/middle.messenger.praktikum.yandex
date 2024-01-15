import { HTTPMethodEnum } from '@/enums/index.ts';
import { HTTPServiceMethod } from '@/types/index.ts';
import { customFetch, queryStringify } from '@/utils/index.ts';

export class HTTPService {
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${import.meta.env.VITE_API_URL}${endpoint}`;
  }

  get: HTTPServiceMethod = (url = '/', options = {}) => {
    const query = options.data ? queryStringify(options.data as XMLHttpRequestBodyInit) : '';

    return customFetch(`${this.#path(url)}${query}`, { ...options, method: HTTPMethodEnum.GET });
  };

  put: HTTPServiceMethod = (url, options = {}) => {
    return customFetch(this.#path(url), { ...options, method: HTTPMethodEnum.PUT });
  };

  post: HTTPServiceMethod = (url, options = {}) => {
    return customFetch(this.#path(url), { ...options, method: HTTPMethodEnum.POST });
  };

  delete: HTTPServiceMethod = (url, options = {}) => {
    return customFetch(this.#path(url), { ...options, method: HTTPMethodEnum.DELETE });
  };

  #path(path: string) {
    return `${this.endpoint}${path}`;
  }
}
