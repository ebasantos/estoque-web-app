import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFrontModule } from './app-front-end-module';
import { GetCountryComponent } from './Components/get-country/get-country.component';
import { PostContryComponent } from './Components/post-country/post-contry.component';

@NgModule({
  declarations: [
    AppComponent,
    GetCountryComponent,
    PostContryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppFrontModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
