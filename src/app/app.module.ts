import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFrontModule } from './app-front-end-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppFrontModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
