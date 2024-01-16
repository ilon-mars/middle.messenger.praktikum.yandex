import { FetchOptions } from './FetchOptions.ts';
import { Optional } from './Optional.ts';

export type HTTPServiceMethod = (url: string, options?: Optional<FetchOptions, 'method'>) => Promise<unknown>;
