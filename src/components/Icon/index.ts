import { Block } from '@/core/Block';

import { IconProps } from '@/types';
import { getRawSvg } from '@/utils';

export class Icon extends Block {
  constructor(props: IconProps, $style?: CSSModuleClasses) {
    super('div', {
      ...props,
      ...($style && { classes: [$style.icon], $style }),
    });
  }

  render() {
    return this.compile(getRawSvg(this.props.name), this.props);
  }
}
