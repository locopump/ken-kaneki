import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import {ChartsModule} from 'ng2-charts';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent,
    DoughnutChartComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ChartsModule
  ],
  exports: [
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent,
    DoughnutChartComponent,
  ]
})
export class SharedModule { }
