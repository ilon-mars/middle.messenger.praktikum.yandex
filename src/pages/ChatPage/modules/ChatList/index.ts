import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { SearchInput } from '@/components/Input';
// import { LinkEnum } from '@/enums';
// import { CHATS } from '@/utils';

import $style from './index.module.sass';

export class ChatList extends Block {
  constructor() {
    super('aside', {
      classes: ['chat-list'],
      $style,
    });
  }

  init() {
    this.children.searchInput = new SearchInput({ name: 'search', type: 'search' }, $style);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
