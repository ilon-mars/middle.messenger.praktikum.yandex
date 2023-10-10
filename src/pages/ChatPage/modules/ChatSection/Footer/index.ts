import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { MessageInput } from '@/components/Input';

import $style from './index.module.sass';

export class Footer extends Block {
  #message = {
    value: '',
    isValid: false,
  };

  constructor() {
    super('footer', {
      classes: [$style.footer],
      $style,
    });
  }

  init() {
    this.children.messageInput = new MessageInput(
      {
        value: '',
        events: {
          blur: e => {
            const target = e?.target;

            if (target) {
              this.#checkField(target as HTMLTextAreaElement);

              this.#message.isValid
                ? (target as HTMLTextAreaElement).classList.remove($style.error)
                : (target as HTMLTextAreaElement).classList.add($style.error);
            }
          },
          input: e => {
            const target = e?.target;

            if (target) {
              (target as HTMLTextAreaElement).classList.remove($style.error);
              this.#checkField(target as HTMLTextAreaElement);
            }
          },
        },
      },
      $style,
    );
  }

  render() {
    return this.compile(tmpl, this.props);
  }

  #checkField(target: HTMLTextAreaElement) {
    this.#message.value = (target as HTMLTextAreaElement).value;
    this.#message.isValid = !!this.#message.value;
  }
}
