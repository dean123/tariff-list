import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TariffListItemComponent } from './list-item/tariff-list-item.component';
import { TrafficStatusComponent } from './traffic-status/traffic-status.component';
import { TariffListComponent } from './tariff-list/tariff-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TariffListItemComponent,
    TrafficStatusComponent,
    TariffListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
