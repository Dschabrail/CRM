import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { FirebaseService } from '../firebase/firebase.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {

  constructor( public dialog: MatDialog, public usersService: FirebaseService, private route: ActivatedRoute) {}
   ngOnInit() {
    this.getUserId();
    this.usersService.getSingleUser();
  }

  getUserId() {
    this.route.paramMap.subscribe((paramMap) => {
      this.usersService.userId = paramMap.get('id');
    });
  }

  editMenu() {
    const dialog = this.dialog.open(EditUserComponent);
  }
}
