import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"", redirectTo:'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'layout', component: LayoutComponent, children: [
    {path:'home', component: DashboardComponent}
  ]},
  {path:'**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
