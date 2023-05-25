import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppointmentsComponent } from '../components/admin/appointments/appointments.component';
import { AppAdminRoutingModule } from '../routes/app-admin-routing.module';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { AppUserRoutingModule } from '../routes/app-user-routing.module';
import { LoginComponent } from '../components/auth/login/login.component';
import { LogoutComponent } from '../components/auth/logout/logout.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { MainNavComponent } from '../components/main-nav/main-nav.component';
import { MatNativeDateModule } from '@angular/material/core';

import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatStepperModule } from '@angular/material/stepper';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { UsereditComponent } from '../components/admin/user-edit/user-edit.component';

const mainRoutes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('../components/admin/admin-main/admin-main.module').then(
        (admin) => admin.AdminMainModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('../components/user/user-main/user-main.module').then(
        (user) => user.UserMainModule
      ),
  },
  { path: 'logout', component: LogoutComponent },
  { path: 'useredit', component: UsereditComponent },
  { path: 'appointment', component: AppointmentsComponent },
  { path: 'no-page-found', component: NoPageFoundComponent },
  { path: '**', redirectTo: 'no-page-found' },
];

const modules = [
  CommonModule,
  AppAdminRoutingModule,
  AppUserRoutingModule,
  BrowserAnimationsModule,
  FlexLayoutModule.withConfig({ addFlexToParent: false }),
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  LayoutModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatMomentDateModule,
  FlatpickrModule,
];
@NgModule({
  declarations: [NoPageFoundComponent, LoginComponent, MainNavComponent],
  imports: [
    ...modules,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(mainRoutes),
  ],
  exports: [...modules, NoPageFoundComponent, MainNavComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EssentialModModule {}
