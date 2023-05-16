import { Component,ViewEncapsulation } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppointmentsComponent {

  selected: Date | null;
  loading = false;
  name: string;
  gender: string;
  appointment :number;
  problem:string;
  isDisabled=true;
  currentUser: any;

  constructor(private userServ:UserService, private authServ:AuthService){}

  addUserForm(){
  this.loading = true;
  console.log('User Added',this.gender,this.name,this.appointment,this.problem);

  this.authServ.saveData(this.userServ.userData).subscribe((result: any)=>{
    console.log(result);
  });

  console.log(this.userServ.userData);

  setTimeout(() =>{
    this.userServ.newUserData({
      name:this.name,
      gender:this.gender,
      appointment:this.appointment+1
    });
    this.loading = false;
    this.name=' ';
    this.gender='';
  },2000)
}

checkDisabled(){
  if(this.name && this.name.trim()!==''){
    this.isDisabled = false;
  }else{
    this.isDisabled = true;
  }
}
dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
  // Only highligh dates inside the month view.
  if (view === 'month') {
    const date = cellDate.getDate();

    // Highlight the 1st and 20th day of each month.
    return date === 1 || date === 20 ? 'example-custom-date-class' : '';
  }

  return '';
};
}

