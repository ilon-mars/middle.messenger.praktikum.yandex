import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { SearchInput } from '@/components/Input';
import { ChatItem } from '@/pages/ChatPage/modules/ChatItem';
import { Link } from '@/components/Link';

import { CHATS, GO_TO_PROFILE } from '@/utils';

import $style from './index.module.sass';

export class ChatList extends Block {
  constructor() {
    super('aside', {
      classes: ['chat-list'],
      $style,
    });
  }

  init() {
    this.children.link = new Link(GO_TO_PROFILE, 'chat');
    this.children.searchInput = new SearchInput({ name: 'search', type: 'search' }, $style);
    this.children.chats = CHATS.map(chat => new ChatItem(chat));
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
