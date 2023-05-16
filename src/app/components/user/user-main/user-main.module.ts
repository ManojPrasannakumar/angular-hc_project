import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMainComponent } from './user-main.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { UserAppointmentComponent } from '../user-appointment/user-appointment.component';
import { AppUserRoutingModule } from 'src/app/routes/app-user-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    UserMainComponent,
    UserProfileComponent,
    UserAppointmentComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,MatInputModule,
    AppUserRoutingModule,ReactiveFormsModule,
  ],
  exports:[
    UserMainComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class UserMainModule { }
