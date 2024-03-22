import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online {
        background: white;
    }
    `]
})
export class ServerComponent{
    serverId = 10;
    serverStatus = 'offline';
    serverCreated = false;

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getColor() {
        return this.serverStatus === "online" ? 'green' : 'red'
    }

}