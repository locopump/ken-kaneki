import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {ViewsComponent} from './views.component';
import { SharedModule } from '../shared/shared.module';
import {routes} from './views-routing.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    ViewsComponent,
    DashboardComponent,
    ProgressComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    DashboardComponent,
    ProgressComponent
  ]
})
export class ViewsModule { }
