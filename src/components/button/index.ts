import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { ButtonProps } from '@/types';

import $style from './index.module.sass';

export class Button extends Block {
  constructor(props: ButtonProps) {
    super('button', {
      ...props,
      classes: [$style.button, $style.small],
      $style,
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

export class MainButton extends Block {
  constructor(props: ButtonProps) {
    super('button', {
      ...props,
      classes: [$style.button, $style.main],
      $style,
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
