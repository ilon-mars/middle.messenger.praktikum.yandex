import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { Link } from '@/components/Link';

import { ErrorPageProps } from '@/types';

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
