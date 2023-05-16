import { EventEmitter, Injectable, OnInit } from '@angular/core';

export interface userType {
  name: string;
  position?: number;
  appointment?: number;
  gender: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {
  userData:userType[]=[{
    name: 'name',
    gender: 'male',
    appointment:1,
    position:1
  }]

  loginStatus=false;
  loginEvent = new EventEmitter();
  localsetItem: string | null;
  data:any;
  constructor() { }
  ngOnInit() {
   /*  const customer = require('./user.json');
    console.log(customer);

    const fs = require('fs');
 */
  }

  newUserData = (userObj:userType)=>{
    const newUser = {...userObj,position:this.userData.length+1,appointment:this.userData.length+1};
    this.userData.push(newUser);
  }

  updateUserData = (userObj:userType)=>{
    const userIndex=this.userData.findIndex(user=>user.position === userObj.position);
    console.log('userIndex',userIndex);
    this.userData[userIndex]= userObj;
  }

  changeLoginStatus(status:boolean){
    this.loginStatus= status;
    this.loginEvent.emit();
  }

}
