import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StorageService } from "./shared/service/storage.service";
@NgModule({
  declarations: [
    AppComponent
  ],
  // there will import globle modules
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    StorageService, // 
  ],
  exports: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
