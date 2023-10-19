import { Component, OnInit} from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
 

  constructor(public usersService: FirebaseService) {
   
  }
  ngOnInit(): void {
     this.usersService.getUser();
  }

  
}
