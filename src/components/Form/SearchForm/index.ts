import { tmpl } from './index.tmpl.ts';

import { Form } from '@/components/Form/Form.ts';
import { SearchInput } from '@/components/Input/index.ts';

import { FormProps } from '@/types/index.ts';

import $style from './index.module.sass';

export class SearchForm extends Form {
  search = '';

  constructor(props: FormProps) {
    super({
      ...props,
      $style,
    });
  }

  init() {
    this.children.searchInput = new SearchInput(
      {
        value: '',
        events: {
          input: e => {
            const target = e?.target;

            this.search = (target as HTMLInputElement).value || '';
          },
        },
      },
      $style,
    );
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
