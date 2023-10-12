import { ApiMethodEnum } from '@/enums';

type FetchMethod = `${ApiMethodEnum}`;

export type FetchOptions = {
  method: FetchMethod;
  timeout: number;
  headers?: Record<string, string>[];
  data?: XMLHttpRequestBodyInit;
};
