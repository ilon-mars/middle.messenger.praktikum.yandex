import { Block } from '@/core/Block/index.ts';

import { tmpl } from './index.tmpl.ts';

import { FileInputProps } from '@/types/index.ts';

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
