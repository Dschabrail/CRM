import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FirebaseService } from '../firebase/firebase.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditUserComponent>,
    public usersService: FirebaseService
  ) {}

  ngOnInit(): void {}

  save() {
    this.usersService.save();
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  deleteUser() {
    this.usersService.deleteUser();
    this.closeDialog();
  }
}
