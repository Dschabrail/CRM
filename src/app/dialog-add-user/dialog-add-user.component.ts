import { Component, inject } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  onSnapshot,
  getFirestore,
} from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent {
  firestore: Firestore = inject(Firestore);
  user = new User();
  birthDate!: Date;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) {}

  async addUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user);
    this.loading = true;

    await addDoc(this.getUserRef(), this.user.toJSON())
      .catch((e) => {
        console.log(e);
      })
      .then(() => {
        this.loading = false;
        this.dialogRef.close();
      });
  }

  getUserRef() {
    return collection(this.firestore, 'users');
  }
}
