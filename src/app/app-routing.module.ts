import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { LandingComponent } from './landing/landing.component';
// import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path:'' ,  redirectTo: 'dashboard' ,  pathMatch: 'full' },
  {
    path: 'landing',  component: LandingComponent},
    { path:'employee' , component:EmployeeComponent },
    { path:'addEmp/:Id' , component:EmployeeAddComponent },
    { path:'deleteEmp' , component:EmployeeDeleteComponent },
    { path:'updateEmp' , component:EmployeeUpdateComponent },
  
  // { path:'dashboard' , component:DashboardComponent },
  { path: 'admin', loadChildren: () => import(`./admin/admin.module`).then(m => m.AdminModule) },
]
  





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
