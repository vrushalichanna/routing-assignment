import { Routes } from '@angular/router';
import { RouterModule } from  '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NgModule } from '@angular/core';



const routes: Routes = [
   
    { path: 'dashboard', component: DashboardComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }