import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
// import { DashboardComponent } from './views/dashboard/dashboard.component';
// import { ProgressComponent } from './views/progress/progress.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { ViewsComponent } from './views/views.component';
import { ViewsModule } from './views/views.module';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    // DashboardComponent,
    // ProgressComponent,
    // HeaderComponent,
    // SidebarComponent,
    // BreadcrumbsComponent,
    // ViewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
