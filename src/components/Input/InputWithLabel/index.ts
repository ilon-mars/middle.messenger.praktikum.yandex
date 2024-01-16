import { Block } from '@/core/Block/index.ts';

import { tmpl } from './index.tmpl.ts';

import { InputWithLabelProps } from '@/types/index.ts';

import $style from './index.module.sass';

export class InputWithLabel extends Block {
  constructor(props: InputWithLabelProps, className = '') {
    super({
      ...props,
      classes: [className],
      $style,
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
