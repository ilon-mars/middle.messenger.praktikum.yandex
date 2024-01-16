import { Block } from '@/core/Block/index.ts';

import { tmpl } from './index.tmpl.ts';

import { MainButton } from '@/components/Button/index.ts';
import { Input } from '@/components/Input/Input.ts';

import { ManageChatModalProps } from '@/types/index.ts';

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
          this.props.overlayBind();

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
