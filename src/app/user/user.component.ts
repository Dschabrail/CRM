import { Component, OnInit, inject } from '@angular/core';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatDialog } from '@angular/material/dialog';
import {
  Firestore,
  collection,
  addDoc,
  onSnapshot,
  getFirestore,
  doc,
} from '@angular/fire/firestore';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  unsubList;
  user = new User();
  allUsers = [];

  constructor(public dialog: MatDialog) {
    this.unsubList = onSnapshot(this.getUserRef(), (list) => {
      this.allUsers = [];
      list.forEach((element) => {
        this.allUsers.push(element.data());
      }); 
    });
  }
  
  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

  getUserRef() {
    return collection(this.firestore, 'users');
  }

  ngOnDestroy() {
    this.unsubList();
  }
}
