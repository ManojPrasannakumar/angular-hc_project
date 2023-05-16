import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http:HttpClient) {}
  isLogin = new BehaviorSubject<{token:string, userType:string}|null>(null);
  logoff = new BehaviorSubject<{token:string, userType:string}|null>(null);
  url='http://localhost:3001/login';
  loginUser({email,password}:{email:string,password:string}){
    return this.http.post(this.url,{
      email,
      password
    })
  }
  saveData(data: any){
    console.log('From savedata method of Authservice',data);
    return this.http.post(this.url,data);
  }


  localLoginStatus: boolean= false;
  globalLoginStatus= new BehaviorSubject<boolean>(false);

  checkAuth(){
    return new Promise((resolve,reject)=>{
      resolve(this.localLoginStatus);
    })
  }

  login(){
    this.localLoginStatus = true;
    this.globalLoginStatus.next(true);
  }

  logout(){
    this.localLoginStatus = false;
    this.globalLoginStatus.next(false);
  }

}
/*

 1. loginStatus=false;
  loginEvent = new EventEmitter();

  changeLoginStatus(status:boolean){
    this.loginStatus= status;
    this.loginEvent.emit();
  }


  2.
 */
