import { EventBus } from '@/core/EventBus';
import { Block } from '@/core/Block';

import { User, Chat, ID, Message } from '@/types';
import { set } from '@/utils';

export type State = {
  user?: {
    data: User;
    error?: string | undefined;
  } | null;

  chats?: {
    data: Chat[];
    error?: string | undefined;
  };

  selectedChat?: {
    id: ID;
  };

  messages?: Message[];

  resources?: {
    error?: string | undefined;
  };
};

enum StorageEvent {
  UPDATE_STATE = 'update',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
class Store extends EventBus {
  #state: State = {};

  static _instance: Store;

  constructor() {
    if (Store._instance) {
      return Store._instance;
    }

    super();

    Store._instance = this;
  }

  get state() {
    return this.#state;
  }

  set(path: string, value: unknown) {
    set(this.#state, path, value);

    this.emit(StorageEvent.UPDATE_STATE, this.state);
  }
}

const store = new Store();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function withStore(Component: typeof Block, mapStateToProps: any) {
  return class WithStore extends Component {
    constructor(props = {}) {
      const store = new Store();
      super({ ...props, ...mapStateToProps(store.state) });

      store.on(StorageEvent.UPDATE_STATE, () => {
        this.setProps({ ...mapStateToProps(store.state) });
      });
    }
  };
}

export default store;
