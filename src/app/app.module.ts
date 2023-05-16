import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AdminMainModule } from './components/admin/admin-main/admin-main.module';
import { EssentialModModule } from './essential-mod/essential-mod.module';
import { HttpClientModule } from '@angular/common/http';
import { UserMainModule } from './components/user/user-main/user-main.module';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DoctorComponent } from './components/doctor/doctor.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent,
    DoctorComponent
  ],
  imports: [
    BrowserModule,
    EssentialModModule,
    AdminMainModule,
    UserMainModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
