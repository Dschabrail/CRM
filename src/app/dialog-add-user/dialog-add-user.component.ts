import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FirebaseService } from '../firebase/firebase.service';

interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})

export class DialogAddUserComponent {
  genders: Gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
  ];

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
