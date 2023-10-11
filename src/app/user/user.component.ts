import { Component } from '@angular/core';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  displayedColumns: string[] = ['Name', 'Birth Date', 'Email', 'Street', 'Zip code', 'City'];

  constructor(public dialog: MatDialog){}

openDialog() {
  this.dialog.open(DialogAddUserComponent);
}
}
