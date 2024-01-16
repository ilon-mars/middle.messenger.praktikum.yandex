import { Block } from '@/core/Block/index.ts';

import { tmpl } from './index.tmpl.ts';

import { SearchInputProps } from '@/types/index.ts';

export class SearchInput extends Block {
  constructor(props: SearchInputProps, $style: CSSModuleClasses) {
    super({
      ...props,
      $style,
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
