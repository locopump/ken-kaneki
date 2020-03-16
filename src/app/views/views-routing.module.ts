import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {ChartsComponent} from './charts/charts.component';



export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'progress',
        component: ProgressComponent
      },
      {
        path: 'graficos',
        component: ChartsComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

