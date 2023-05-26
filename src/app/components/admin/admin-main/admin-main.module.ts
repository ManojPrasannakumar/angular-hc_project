import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminMainComponent } from './admin-main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppUserRoutingModule } from '../../routes/app-user-routing.module';
import { AllUsersComponent } from '../all-users/all-users.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { AppointmentsComponent } from '../appointments/appointments.component';
import { AppAdminRoutingModule } from '../../routes/app-admin-routing.module';
import { HomeComponent } from '../home/home.component';
import { UsereditComponent } from '../user-edit/user-edit.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatStepperModule } from '@angular/material/stepper';

const matmodules = [
  CommonModule,
  AppAdminRoutingModule,
  AppUserRoutingModule,
  BrowserAnimationsModule,
  FlexLayoutModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  LayoutModule,
  MatToolbarModule,
  MatListModule,
  MatSelectModule,
  MatFormFieldModule,
  MatDialogModule,
  MatPaginatorModule,
  MatTableModule,
  MatDatepickerModule,
  MatInputModule,
  MatStepperModule,
];

@NgModule({
  declarations: [
    AdminMainComponent,
    HomeComponent,
    AllUsersComponent,
    AppointmentsComponent,
    UsereditComponent,
    DashboardComponent,
  ],
  imports: [
    ...matmodules,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppAdminRoutingModule,
  ],
  exports: [AdminMainComponent],
})
export class AdminMainModule {}
