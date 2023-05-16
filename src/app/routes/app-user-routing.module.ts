import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoPageFoundComponent } from '../essential-mod/no-page-found/no-page-found.component';
import { UserMainComponent } from '../components/user/user-main/user-main.component';
import { UserProfileComponent } from '../components/user/user-profile/user-profile.component';
import { UserAppointmentComponent } from '../components/user/user-appointment/user-appointment.component';
import { LoginComponent } from '../components/auth/login/login.component';

const userRoutes: Routes = [
  {path:'', component: LoginComponent},
  {path:'user', component: UserMainComponent},
  {path:'user-profile', component:UserProfileComponent},
  {path:'user-appointment', component:UserAppointmentComponent},
  /* {path:'no-page-found', component:NoPageFoundComponent},
  {path:'**', redirectTo:'no-page-found'}, */
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class AppUserRoutingModule { }
