import { Component } from '@angular/core';

@Component({
  selector: 'app-server', /* Selection par element*/
  templateUrl: './server.component.html',
  styles:[`
    .online{
      color:white;
    }
    `]
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = ''

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return this.serverStatus === "online" ? 'green' : 'red';
  }
}
