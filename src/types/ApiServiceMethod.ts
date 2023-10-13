import { FetchOptions } from './FetchOptions';

export type ApiServiceMethod = (url: string, options?: FetchOptions) => Promise<unknown>;
