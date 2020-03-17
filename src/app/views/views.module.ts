import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {ViewsComponent} from './views.component';
import { SharedModule } from '../shared/shared.module';
import {routes} from './views-routing.module';
import {RouterModule} from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { ChartsComponent } from './charts/charts.component';
import { ReportesComponent } from './reportes/reportes.component';



@NgModule({
  declarations: [
    ViewsComponent,
    DashboardComponent,
    ProgressComponent,
    ChartsComponent,
    ReportesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ChartsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    DashboardComponent,
    ProgressComponent
  ]
})
export class ViewsModule { }
