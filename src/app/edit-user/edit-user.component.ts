import { Component, OnInit, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase/firebase.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditUserComponent>,
    private router: Router,
    public usersService: FirebaseService
  ) {}
  ngOnInit(): void {}

  async save() {
    this.usersService.save();
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  deleteUser() {
    this.usersService.deleteUser();
    this.closeDialog();
    this.router.navigate(['user']);
  }
}