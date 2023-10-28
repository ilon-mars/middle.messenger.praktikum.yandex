import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { SearchInputProps } from '@/types';

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
