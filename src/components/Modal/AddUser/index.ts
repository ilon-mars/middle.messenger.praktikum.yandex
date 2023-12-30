import store from '@/core/Store';

import { ManageChatModal } from '@/components/Modal';

import ChatController from '@/controllers/ChatController';

import { ManageChatModalProps } from '@/types';

export class AddUserModal extends ManageChatModal {
  constructor(props: ManageChatModalProps) {
    super({
      ...props,
    });
  }

  async action(value: string) {
    if (!store.state.selectedChat || !store.state.selectedChat.id) {
      return;
    }

    await ChatController.addUserToChat(store.state.selectedChat?.id, parseInt(value));
  }
}
