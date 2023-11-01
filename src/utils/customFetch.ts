import { HTTPMethodEnum } from '@/enums';
import { FetchOptions } from '@/types';

export const customFetch = (url: string, options: FetchOptions) => {
  const { method, data, headers } = options;

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status < 400) {
          resolve(xhr.response);
        } else {
          reject(xhr.response);
        }
      }
    };

    xhr.onabort = () => reject({ reason: 'Соединение прервано' });
    xhr.onerror = () => reject({ reason: 'Ошибка сети' });
    xhr.ontimeout = () => reject({ reason: 'Превышено время запроса' });

    xhr.setRequestHeader('Content-Type', 'application/json');

    if (headers) {
      headers.forEach(({ key, value }) => {
        xhr.setRequestHeader(key, value);
      });
    }

    xhr.withCredentials = true;
    xhr.responseType = 'json';

    if (method === HTTPMethodEnum.GET || !data) {
      xhr.send();
    } else {
      xhr.send(JSON.stringify(data));
    }
  });
};
