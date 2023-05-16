import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/auth/login/login.component';
import { AdminMainComponent } from '../components/admin/admin-main/admin-main.component';
import { AllUsersComponent } from '../components/admin/all-users/all-users.component';
import { AppointmentsComponent } from '../components/admin/appointments/appointments.component';
import { HomeComponent } from '../components/admin/home/home.component';

const adminRoutes: Routes = [
  {path:'', component: LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'admin', component:AdminMainComponent},
  {path:'all-users', component:AllUsersComponent},
  {path:'appointments', component:AppointmentsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AppAdminRoutingModule { }
