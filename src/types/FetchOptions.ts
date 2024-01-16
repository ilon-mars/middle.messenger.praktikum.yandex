import { HTTPMethodEnum } from '@/enums/ApiMethodEnum.ts';

type FetchMethod = `${HTTPMethodEnum}`;

export type FetchOptions = {
  method: FetchMethod;
  timeout?: number;
  headers?: Record<string, string>[];
  data?: unknown;
};
