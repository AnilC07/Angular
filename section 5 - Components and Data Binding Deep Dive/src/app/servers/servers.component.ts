import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent {
  allowNewServer = false;


  serverCreationStatus = "No Server was Created";
  serverName = 'testserver';
  serverCreated = false

  servers = ['TestServer', 'TestServer 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)


  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  onCreateServer() {
    this.serverCreated = true
    this.servers.push(this.serverName)
    this.serverCreationStatus = "Server was created successfully " + this.serverName
  }

}
