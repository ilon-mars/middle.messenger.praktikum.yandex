import store from '@/core/Store';
import WebSocketService from '@/services/ws.service.ts';
import ChatController from './ChatController';

import { SocketEventEnum } from '@/enums';
import { Message } from '@/types';

class MessageController {
  private readonly sockets: Map<number, WebSocketService> = new Map();

  async connect(id: number, token: string) {
    if (this.sockets.has(id)) {
      return;
    }

    const userId = store.state.user?.data.id;

    const socket = new WebSocketService(`${process.env.VITE_SOCKET_URL}${userId}/${id}/${token}`);

    this.sockets.set(id, socket);

    await socket.connect();

    this.subscribe(socket, id);
    this.fetchOldMessages(id);
  }

  sendMessage(id: number, message: string) {
    const socket = this.sockets.get(id);

    if (!socket) {
      throw new Error(`Chat ${id} is not connected`);
    }

    socket.send({
      type: 'message',
      content: message,
    });
  }

  fetchOldMessages(id: number) {
    const socket = this.sockets.get(id);

    if (!socket) {
      throw new Error(`Chat is not connected`);
    }

    // todo: что за тип?
    socket.send({ type: 'get old', content: '0' });
  }

  private onMessage(id: number, messages: Message | Message[]) {
    let messagesToAdd: Message[] = [];

    if (Array.isArray(messages)) {
      messagesToAdd = messages.reverse();
      // todo: тип сообщений
    } else if (messages.type === 'user connected') {
      return;
    } else {
      messagesToAdd.push(messages);
    }

    // todo: что это?
    const currentMessages = (store.state?.messages || {})[id] || [];

    messagesToAdd = [...currentMessages, ...messagesToAdd];

    store.set(`messages.${id}`, messagesToAdd);

    ChatController.updateChats().catch(() => false);
  }

  private onClose(id: number) {
    this.sockets.delete(id);
  }

  private subscribe(transport: WebSocketService, id: number) {
    transport.on(SocketEventEnum.MESSAGE, message => this.onMessage(id, message as Message | Message[]));
    transport.on(SocketEventEnum.CLOSE, () => this.onClose(id));
  }
}

export default new MessageController();
