import { Injectable } from '@angular/core';
import * as SockJS from 'sockjs-client';

@Injectable({ providedIn: 'root' })
export class TestService {
  public createSocket(): void {
    console.log('Trying "new SockJS" in TestService');
    const sock: WebSocket = new SockJS('fake/path');

    sock.onmessage = (m: any) => console.log('testservice message', m);
    sock.onopen    = () => console.log('testservice socket open');
    sock.onclose   = () => console.log('testservice socket closed');
  }
}
