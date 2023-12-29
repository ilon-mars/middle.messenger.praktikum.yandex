import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { InputWithLabelProps } from '@/types';

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
