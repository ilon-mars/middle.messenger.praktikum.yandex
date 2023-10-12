import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { ModalProps } from '@/types';

import $style from './index.module.sass';

export abstract class Modal extends Block {
  constructor(props: ModalProps) {
    super('dialog', {
      ...props,
      classes: [$style.modal],
      $style,
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
