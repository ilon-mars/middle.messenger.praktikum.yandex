import { Block } from '@/core/Block/index.ts';

import { tmpl } from './index.tmpl.ts';

import { ButtonProps } from '@/types/index.ts';

import $style from './index.module.sass';

export class DefaultButton extends Block {
  constructor(props: ButtonProps, className: string = '') {
    super({
      ...props,
      classes: [$style.default, className],
      attrs: { type: 'button' },
      $style,
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

export class MainButton extends Block {
  constructor(props: ButtonProps, className: string = $style.hover) {
    super({
      ...props,
      classes: [$style.main, className],
      $style,
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
