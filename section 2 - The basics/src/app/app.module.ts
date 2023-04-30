import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { SuccessComponent } from './success/success.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { ExercicesComponent } from './exercices/exercices.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ExerciceComponent,
    ExercicesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] /* lister les composants qui utilisent bootstrap dans le tableau */
})
export class AppModule { }
