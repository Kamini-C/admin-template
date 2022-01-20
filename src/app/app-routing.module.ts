import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditstudentComponent } from './students/editstudent/editstudent.component';
import { ListstudentComponent } from './students/liststudent/liststudent.component';
import { ViewstudentComponent } from './students/viewstudent/viewstudent.component';

const routes: Routes = [
  {path:"", redirectTo:'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'layout', component: LayoutComponent, children: [
    {path:'home', component: DashboardComponent},
    {path:'register', component: RegisterComponent},
    {path: 'liststudent', component: ListstudentComponent},
    {path: 'viewstudent/:id', component: ViewstudentComponent},
    {path: 'editstudent/:id', component: EditstudentComponent}
  ]},
  {path:'**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
