import { ApiMethodEnum } from '@/enums';
import { FetchOptions } from '@/types';

export const customFetch = (url: string, options: FetchOptions) => {
  const { method, data, headers } = options;

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    if (headers) {
      headers.forEach(({ key, value }) => {
        xhr.setRequestHeader(key, value);
      });
    }

    xhr.onload = function () {
      resolve(xhr);
    };

    xhr.onabort = reject;
    xhr.onerror = reject;
    xhr.ontimeout = reject;

    if (method === ApiMethodEnum.GET || !data) {
      xhr.send();
    } else {
      xhr.send(data);
    }
  });
};
