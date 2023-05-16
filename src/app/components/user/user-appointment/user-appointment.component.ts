import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-appointment',
  templateUrl: './user-appointment.component.html',
  styleUrls: ['./user-appointment.component.scss']
})
export class UserAppointmentComponent {

  min = '2023-05-15T00:00';
  max = '2023-11-15T00:00';

  single: Date | undefined;
  singleLabels = [];
  singleInvalid = [];

  onPageLoading(event: any): void {
      this.getPrices(event.firstDay, (bookings: any) => {
          this.singleLabels = bookings.labels;
          this.singleInvalid = bookings.invalid;
      });
  }
  constructor(private http:HttpClient){}
  getPrices(date: any, callback: any): void {
      const invalid: any = [];
      const labels: any = [];

      this.http.jsonp('//trial.mobiscroll.com/getprices/?year=' + date.getFullYear() + '&month=' + date.getMonth(), 'callback').subscribe((bookings: any) => {
          for (var i = 0; i < bookings.length; ++i) {
              const booking = bookings[i];
              const d = new Date(booking.d);

              if (booking.nr > 0) {
                  labels.push({
                      start: d,
                      title: booking.nr + ' SPOTS',
                      textColor: '#e1528f'
                  });
              } else {
                  invalid.push(d);
              }
          }
          callback({ labels, invalid });
      });
  }

}

