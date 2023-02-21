import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import { TrafficStatusComponent } from './traffic-status/traffic-status.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    TrafficStatusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
