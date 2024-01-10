import { Block } from '@/core/Block/index.ts';

import { IconProps } from '@/types/index.ts';
import { getRawSvg } from '@/utils/index.ts';

export class Icon extends Block {
  constructor(props: IconProps, $style?: CSSModuleClasses) {
    super({
      ...props,
      ...($style && { classes: [$style.icon], $style }),
    });
  }

  render() {
    return this.compile(getRawSvg(this.props.name), this.props);
  }
}
