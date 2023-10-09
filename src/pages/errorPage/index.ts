import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { Link } from '@/components/Link';

import { ErrorPageProps } from '@/types';
import { navigateTo } from '@/utils';

import $style from './index.module.sass';

export class ErrorPage extends Block {
  constructor(props: ErrorPageProps) {
    super('main', {
      ...props,
      classes: [$style.container, 'main-layout'],
      $style,
    });
  }

  init() {
    this.children.link = new Link({
      ...this.props.linkProps,
      events: { click: () => navigateTo(this.props.linkProps.to) },
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
