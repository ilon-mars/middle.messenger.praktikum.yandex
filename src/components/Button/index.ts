import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { ButtonProps } from '@/types';

import $style from './index.module.sass';

export class Button extends Block {
  constructor(props: ButtonProps) {
    super({
      ...props,
      classes: [$style.small],
      attrs: { type: 'button' },
      $style,
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

export class MainButton extends Block {
  constructor(props: ButtonProps) {
    super({
      ...props,
      classes: [$style.main],
      $style,
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
