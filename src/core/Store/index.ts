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
    title: string;
    avatarUrl?: string;
  };

  messages?: Record<ID, Message[]>;

  resources?: {
    error?: string | undefined;
  };
};

enum StorageEvent {
  UPDATE_STATE = 'update',
}

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

export function withStore<T>(Component: new (props: T) => Block, mapStateToProps: (state: State) => T) {
  return class WithStore extends Component {
    constructor(props: T) {
      const store = new Store();
      super({ ...props, ...mapStateToProps(store.state) });

      store.on(StorageEvent.UPDATE_STATE, () => {
        this.setProps({ ...mapStateToProps(store.state) });
      });
    }
  };
}

export default store;
