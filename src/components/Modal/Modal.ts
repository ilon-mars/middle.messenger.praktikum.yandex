import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { MainButton } from '@/components/Button';
import { Input } from '@/components/Input';

import { ManageChatModalProps } from '@/types';

import $style from './index.module.sass';

export class ManageChatModal extends Block {
  constructor(props: ManageChatModalProps) {
    super({
      ...props,
      $style,
    });
  }

  init() {
    this.children.button = new MainButton({
      ...this.props.buttonProps,
      events: {
        click: async e => {
          e?.preventDefault();

          const inputElement = (this.children.input as Block).element! as HTMLInputElement;

          await this.action(inputElement.value);
          this.hide();

          inputElement.value = '';
        },
      },
    });

    this.children.input = new Input({});
  }

  render() {
    return this.compile(tmpl, this.props);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async action(_value: string) {}
}
