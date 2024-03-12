import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit{
    serverId = 10;
    serverStatus = 'offline';
    allowNewServer = true;

    constructor() {
        setTimeout(() => {
            this.allowNewServer = false;
        }, 2000);
    }

    ngOnInit() {
        
    }

}