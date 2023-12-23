import { EventBus } from '@/core/EventBus';

import { SocketEventEnum } from '@/enums';

export default class WebSocketService extends EventBus<{ [Ev: string]: unknown[] }> {
  private socket: WebSocket | null = null;

  private pingInterval: unknown = 0;

  constructor(private url: string) {
    super();
  }

  public send(data: unknown) {
    if (!this.socket) {
      throw new Error('Socket is not connected');
    }

    this.socket.send(JSON.stringify(data));
  }

  public connect(): Promise<void> {
    this.socket = new WebSocket(this.url);

    this.subscribe(this.socket);

    this.setupPing();

    return new Promise(resolve => {
      this.on(SocketEventEnum.CONNECTED, () => {
        resolve();
      });
    });
  }

  public close() {
    this.socket?.close();
  }

  private setupPing() {
    this.pingInterval = setInterval(() => {
      this.send({ type: 'ping' });
    }, 5000);

    this.on(SocketEventEnum.CLOSE, () => {
      clearInterval(this.pingInterval as number);

      this.pingInterval = 0;
    });
  }

  private subscribe(socket: WebSocket) {
    socket.addEventListener('open', () => {
      this.emit(SocketEventEnum.CONNECTED);
    });

    socket.addEventListener('close', () => {
      this.emit(SocketEventEnum.CLOSE);
    });

    socket.addEventListener('error', e => {
      this.emit(SocketEventEnum.ERROR, e);
    });

    socket.addEventListener('message', message => {
      const data = JSON.parse(message.data);

      if (data.type && data.type === 'pong') {
        return;
      }

      this.emit(SocketEventEnum.MESSAGE, data);
    });
  }
}
