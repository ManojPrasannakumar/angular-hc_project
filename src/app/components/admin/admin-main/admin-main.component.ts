import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

export type pageType = 'add' | 'all';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.scss'],
})
export class AdminMainComponent {
  constructor(private router: Router) {}

  @Output() currentPage = new EventEmitter<pageType>();
  addapp() {
    console.log('addapp called');
    this.router.navigateByUrl('/appointment');
    this.currentPage.emit('add');
  }

  addUser() {
    this.router.navigateByUrl('/useredit');
    this.currentPage.emit('all');
  }
}
