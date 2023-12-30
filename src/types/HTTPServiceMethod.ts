import { FetchOptions } from './FetchOptions';
import { Optional } from './Optional';

export type HTTPServiceMethod = (url: string, options?: Optional<FetchOptions, 'method'>) => Promise<unknown>;
