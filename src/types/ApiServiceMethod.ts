import { FetchOptions } from './FetchOptions';
import { Optional } from './Optional';

export type ApiServiceMethod = (url: string, options?: Optional<FetchOptions, 'method'>) => Promise<unknown>;
