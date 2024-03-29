import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlert } from './warningalert/warningalert.component';
import { SuccesalertComponent } from './succesalert/succesalert.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    WarningAlert,
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccesalertComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
