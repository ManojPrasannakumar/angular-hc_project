import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, timeout } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit{
  @ViewChild('drawer') drawer:any;

  loginStatus: boolean = false;
  userType :any ='user';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private authServ:AuthService,
    private router:Router) {}

  toggleDrawer(){
    this.drawer.toggle();
  }
  ngOnInit() {
    this.authServ.isLogin.subscribe((loginData)=>{
      this.userType =  loginData?.userType;
      this.loginStatus = true;
    })

  }
  logoff(){
    this.authServ.logoff.subscribe((loginStatus)=>{
      this.loginStatus = false;
      this.router.navigateByUrl('');
    })
  }

}
/*
   */
