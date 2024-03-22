import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit{
  serverId = 10;
    serverStatus = 'offline';
    allowNewServer = true;
    serverName = '';
    serverCreated = false;
    servers = ['testServer', 'testServer2']

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
        setTimeout(() => {
            this.allowNewServer = false;
        }, 2000);
    }

    ngOnInit() {
        
    }

    onCreateServer() {
        this.serverCreated = true;
        this.servers.push(this.serverName)
    }

    onUpdateServerName(event: any) {
        console.log(event);
        this.serverName = (<HTMLInputElement>event.target).value;
    }

}
