import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm :FormGroup;

  constructor(private authServ:AuthService){}

  ngOnInit(){
    this.loginForm= new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(4)]),
      //userType: new FormControl('',Validators.required)
    })
  }

  loginUser(){
    console.log('LoginUser', this.loginForm.value);
    this.authServ.isLogin.subscribe((loginData)=>{
      console.log('loginData',loginData);
    })
    this.authServ.loginUser(this.loginForm.value).subscribe(
      (res) => {
        const{user, status,msg}:any = res;
        this.authServ.isLogin.next({token:user.token, userType:user.type})
        console.log('status',status)
        console.log('msg',msg)
      },
      (err) => console.log('err',err)
    )
  }

}
