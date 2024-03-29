import { Block } from '@/core/Block/index.ts';
import Store from '@/core/Store/index.ts';

export const showNotification = (_this: Block, store: typeof Store) => {
  if (store.state.user?.error) {
    _this.setProps({ notification: store.state.user.error });

    setTimeout(() => {
      _this.setProps({ notification: false });
    }, 2500);
  }
};
