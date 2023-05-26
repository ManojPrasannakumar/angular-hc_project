import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { userType } from '../all-users/all-users.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UsereditComponent {
  name: string;
  gender: string;
  position: number | undefined;
  isDisabled = true;

  constructor(
    public dialogRef: MatDialogRef<UsereditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: userType,
    private userServ: UserService
  ) {
    this.name = data.name;
    this.gender = data.gender;
    this.position = data.position;
  }

  editUser() {
    this.userServ.updateUserData({
      name: this.name,
      gender: this.gender,
      position: this.position,
    });
    console.log(this.name, this.gender);
    this.dialogRef.close();
  }

  checkDisabled() {
    if (this.name && this.name.trim() !== '') {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }
}
