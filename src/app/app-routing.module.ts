import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagenotfoundComponent} from './shared/pagenotfound/pagenotfound.component';
import {ViewsComponent} from './views/views.component';


const routes: Routes = [
  {
    path: '',
    component: ViewsComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/views.module').then(m => m.ViewsModule),
        data: {title: 'Dashboard'}
      }
    ]
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
