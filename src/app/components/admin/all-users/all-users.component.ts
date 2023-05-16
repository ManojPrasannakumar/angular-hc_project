import { AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import { UsereditComponent } from '../user-edit/user-edit.component';

export interface userType {
  name: string;
  position?: number;
  appointment?: number;
  gender: string;
}

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'gender','edit'];
  dataSource = new MatTableDataSource<userType>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userServ:UserService,private dialog: MatDialog){}

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<userType>(patient_DATA);
    this.dataSource.paginator = this.paginator;
    console.log(this.userServ.userData);
  }

  editUser(element:userType){
    this.openDialog(element);
  }
  openDialog(element: userType): void {
    const dialogRef = this.dialog.open(UsereditComponent, {
      height: '400px',
      width: '40%',
      data: element,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dataSource= new MatTableDataSource<userType>(this.userServ.userData);
    });
  }
}

const patient_DATA: userType[] = [
  {position: 1, name: 'Hydrogen', appointment: 1.0079, gender: 'Male'},
  {position: 2, name: 'Helium', appointment: 4.0026, gender: 'Female'},
  {position: 3, name: 'Lithium', appointment: 6.941, gender: 'Male'},
  {position: 4, name: 'Beryllium', appointment: 9.0122, gender: 'Others'},
  {position: 5, name: 'Boron', appointment: 10.811, gender: 'Female'},
  {position: 6, name: 'Carbon', appointment: 12.0107, gender: 'Male'},
  {position: 7, name: 'Nitrogen', appointment: 14.0067, gender: 'Female'},
  {position: 8, name: 'Oxygen', appointment: 15.9994, gender: 'Others'},
  {position: 9, name: 'Fluorine', appointment: 18.9984, gender: 'Female'},
  {position: 10, name: 'Neon', appointment: 20.1797, gender: 'Male'},
  {position: 11, name: 'Sodium', appointment: 22.9897, gender: 'Female'},
  {position: 12, name: 'Magnesium', appointment: 24.305, gender: 'Male'},
  {position: 13, name: 'Aluminum', appointment: 26.9815, gender: 'Others'},
  {position: 14, name: 'Silicon', appointment: 28.0855, gender: 'Female'},
  {position: 15, name: 'Phosphorus', appointment: 30.9738, gender: 'Male'},
  {position: 16, name: 'Sulfur', appointment: 32.065, gender: 'Others'},
  {position: 17, name: 'Chlorine', appointment: 35.453, gender: 'Female'},
  {position: 18, name: 'Argon', appointment: 39.948, gender: 'Male'},
  {position: 19, name: 'Potassium', appointment: 39.0983, gender: 'Female'},
  {position: 20, name: 'Calcium', appointment: 40.078, gender: 'Female'},
];


