import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  doc,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from 'src/models/user.class';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  firestore: Firestore = inject(Firestore);
  user = new User();
  birthDate!: Date;
  loading = false;
  allUsers = [];
  userId;
  unsubList;
  unsubSingle;
  date;
  formattedDate;
  singleUser;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  getUser() {
    this.unsubList = onSnapshot(this.getUserRef(), (list) => {
      this.allUsers = [];
      list.forEach((element) => {
        const userData = element.data();
        userData['id'] = element.id;
        this.allUsers.push(userData);
      });
    });
  }

  getSingleUser() {
    this.unsubSingle = onSnapshot(
      this.getSingleDocRef('users', this.userId),
      (element) => {
        this.singleUser = element.data();
        this.formattedBirthDate(); 
      }
    );
  }

  async save() {
    let docRef = this.getSingleDocRef('users', this.userId);
    this.singleUser.birthDate = this.singleUser.birthDate.getTime();
    this.loading = true;
    await updateDoc(docRef, this.singleUser).catch((err) => {
      console.log(err);
    }).then(() => {
      this.loading = false;
    });
  }

  async addUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime();
    await addDoc(this.getUserRef(), this.user.toJSON()).catch((e) => {
      console.log(e);
    }).then(() => {
      this.loading = false;
      this.user = new User();
      this.birthDate = null;
    });
  }

  deleteUser() {
    deleteDoc(this.getSingleDocRef('users', this.userId));
    this.router.navigate(['user']);
  }

  getSingleDocRef(collId: string, docId: string) {
    return doc(collection(this.firestore, collId), docId);
  }

  getUserRef() {
    return collection(this.firestore, 'users');
  }

  ngOnDestroy() {
    if(this.unsubList && this.unsubSingle) {
    this.unsubList();
    this.unsubSingle();
  }
}

  formattedBirthDate() {
    if (this.singleUser) {
      this.date = new Date(this.singleUser.birthDate);
      const day = this.date.getDate();
      const month = this.date.getMonth() + 1;
      const year = this.date.getFullYear();
      this.formattedDate = `${day}/${month}/${year}`;
    }
  }
}
