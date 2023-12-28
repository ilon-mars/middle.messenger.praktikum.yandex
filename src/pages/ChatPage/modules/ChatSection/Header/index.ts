import { Block } from '@/core/Block';
import store from '@/core/Store';

import { tmpl } from './index.tmpl';

import { Avatar } from '@/components/Avatar';
import { DefaultButton } from '@/components/Button';
import { Icon } from '@/components/Icon';

import { ChatHeaderProps } from '@/types';

import $style from './index.module.sass';

export class Header extends Block {
  constructor(props?: ChatHeaderProps) {
    super({
      ...props,
      $style,
    });
  }

  init() {
    this.children.closeButton = new DefaultButton(
      {
        hasText: false,
        icon: new Icon({ name: 'close' }),
        events: {
          click: () => {
            store.set('selectedChat.id', null);
          },
        },
      },
      $style.closeButton,
    );

    this.children.avatar = new Avatar(
      {
        isClickable: false,
      },
      'small',
    );
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
