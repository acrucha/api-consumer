import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsumerComponent } from './consumer/components/consumer.component';
import { ConsumerFacade } from './consumer/consumer.facade';
import { ConsumerService } from './consumer/services/consumer.service';

@NgModule({
  declarations: [
    AppComponent,
    ConsumerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ConsumerService, ConsumerFacade],
  bootstrap: [AppComponent]
})
export class AppModule { }
