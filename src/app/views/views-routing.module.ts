import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {ChartsComponent} from './charts/charts.component';
import {ReportesComponent} from './reportes/reportes.component';



export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {titulo: 'Dashboard'}
      },
      {
        path: 'reportes',
        component: ReportesComponent,
        data: {titulo: 'Reportes'}
      },
      {
        path: 'graficos',
        component: ChartsComponent,
        data: {titulo: 'Gráficos'}
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

