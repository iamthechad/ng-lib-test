import { Component } from '@angular/core';
import { TestService } from 'sample-lib';
import * as SockJS from 'sockjs-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lib-test';

  constructor(private testService: TestService) {
  }

  ngOnInit(): void {
    try {
      this.testService.createSocket();
    } catch (e) {
      console.error(e);
    }
    this.createSocket();
  }

  private createSocket(): void {
    console.log('Trying "new SockJS" in AppComponent');
    const sock: WebSocket = new SockJS('fake/path');

    sock.onmessage = (m: any) => console.log('appcomponent message', m);
    sock.onopen    = () => console.log('appcomponent socket open');
    sock.onclose   = () => console.log('appcomponent socket closed');
  }
}
