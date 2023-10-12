import { Block } from '@/core/Block';

import { SearchInputProps } from '@/types';

export class SearchInput extends Block {
  constructor(props: SearchInputProps, $style: CSSModuleClasses) {
    super('input', {
      ...props,
      classes: [$style.searchInput],
      attrs: {
        placeholder: 'Поиск',
        name: 'search',
        type: 'search',
      },
      $style,
    });
  }

  render() {
    return this.compile('', this.props);
  }
}
