import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { MessageForm } from '@/components/Form';

import $style from './index.module.sass';

export class Footer extends Block {
  constructor() {
    super('footer', {
      classes: [$style.footer],
      $style,
    });
  }

  init() {
    this.children.form = new MessageForm({});
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
