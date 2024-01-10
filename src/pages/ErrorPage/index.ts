import { Block } from '@/core/Block/index.ts';

import { tmpl } from './index.tmpl.ts';

import { Link } from '@/components/Link/index.ts';

import { ErrorPageProps } from '@/types/index.ts';

import $style from './index.module.sass';

export class ErrorPage extends Block {
  constructor(props: ErrorPageProps) {
    super({
      ...props,
      $style,
    });
  }

  init() {
    this.children.link = new Link(this.props.linkProps);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
