import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChartsService, SharedService, SidebarService} from './services.index';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SharedService,
    SidebarService,
    ChartsService
  ]
})
export class ServicesModule { }
