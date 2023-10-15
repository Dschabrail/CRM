import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FirebaseService } from '../firebase/firebase.service';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    public usersService: FirebaseService
  ) {}

  addUser() {
    this.usersService.addUser();
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
