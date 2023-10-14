import { Component, OnInit, inject } from '@angular/core';
import {
  Firestore,
  collection,
  doc,
  onSnapshot,
} from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  userId: string;
  user: any = {};
  unsubSingle: any;
  date;
  formattedDate;
  

  constructor(private route: ActivatedRoute, public dialog: MatDialog) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.userId = paramMap.get('id');
      this.getUser();
    });
  }

  async getUser() {
    this.unsubSingle = onSnapshot(
      this.getSingleDocRef('users', this.userId),
      (element) => {
        this.user = element.data();
        console.log(element.data());
        console.log(this.user);
        this.formattedBirthDate();
      }
    );
  }

  getSingleDocRef(collId: string, docId: string) {
    return doc(collection(this.firestore, collId), docId);
  }

  ngOnDestroy() {
    this.unsubSingle();
  }

  editMenu() {
    const dialog = this.dialog.open(EditUserComponent);
    dialog.componentInstance.user = new User(this.user);
    dialog.componentInstance.userId = this.userId;
  }

  formattedBirthDate() {
    this.date = new Date(this.user.birthDate);
    const day = this.date.getDate();
    const month = this.date.getMonth() + 1; 
    const year = this.date.getFullYear();
    this.formattedDate = `${day}/${month}/${year}`;
  }
}
