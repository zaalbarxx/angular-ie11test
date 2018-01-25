import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForageModule } from '@ngforage/ngforage-ng5';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgForageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
