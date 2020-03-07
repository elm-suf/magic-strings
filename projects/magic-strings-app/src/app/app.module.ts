import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MagicLibModule} from 'magic-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MagicLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
