import { Component, OnInit, inject } from '@angular/core';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { FirebaseService } from '../firebase/firebase.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user = new User();

  constructor(public dialog: MatDialog, public usersService: FirebaseService) {}

  ngOnInit(): void {
    this.usersService.getUser();
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
