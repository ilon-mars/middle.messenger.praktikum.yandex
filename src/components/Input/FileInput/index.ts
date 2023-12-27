import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { FileInputProps } from '@/types';

import $style from './index.module.sass';

export class FileInput extends Block {
  constructor(props: FileInputProps) {
    super({
      ...props,
      $style,
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
