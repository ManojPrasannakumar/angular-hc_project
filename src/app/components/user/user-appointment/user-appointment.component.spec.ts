import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAppointmentComponent } from './user-appointment.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('UserAppointmentComponent', () => {
  let component: UserAppointmentComponent;
  let fixture: ComponentFixture<UserAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAppointmentComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
