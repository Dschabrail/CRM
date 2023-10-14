import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  user: any;
  loading = false;
  userId: any;
  birthDate: Date;

  constructor(public dialogRef: MatDialogRef<EditUserComponent>, private router: Router) {}
  ngOnInit(): void {}


async save() {
    if(this.userId){
      this.loading = true;
      let docRef = this.getSingleDocRef('users', this.userId) 
      await updateDoc(docRef, this.user.toJSON()).catch(
        (err) => { console.log(err); }
      ).then(() => {
        this.loading = false;
        this.closeDialog();
      })  ;
    }
  };


  closeDialog() {
    this.dialogRef.close();
  }

  deleteUser() {
    if (this.userId) {
       deleteDoc(this.getSingleDocRef('users', this.userId));
       this.closeDialog();
       this.router.navigate(['user']);
    }
  }

  getSingleDocRef(collId: string, docId: string) {
    return doc(collection(this.firestore, collId), docId);
  }
}
