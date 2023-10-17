import { Component} from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
 

  constructor(public usersService: FirebaseService) {
    this.usersService.getUser();
  }

  
}
