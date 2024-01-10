import { Block } from '@/core/Block/index.ts';
import { BlockWithStore } from '@/core/Router/index.ts';

export type MainLayoutProps = {
  content: Block | BlockWithStore;
  classes?: string[];
};
