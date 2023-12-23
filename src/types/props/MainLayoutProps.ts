import { Block } from '@/core/Block';
import { BlockWithStore } from '@/core/Router';

export type MainLayoutProps = {
  content: Block | BlockWithStore;
  classes?: string[];
};
