import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeComponent } from './Components/Home-Component/home/home.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,  
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule, HomeComponent]
})
export class AppFrontModule { }