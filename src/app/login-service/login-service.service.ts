import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { from, switchMap } from 'rxjs';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {

  constructor(private auth: Auth, public usersService: FirebaseService) {
    this.usersService.getUser();
   }

  login(username: string, password: string) {
   return from(signInWithEmailAndPassword(this.auth, username, password)
   )
  }

  logout() {
    return from(this.auth.signOut())
  }

  signUp(name: string, email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password)
    ).pipe(switchMap(({user}) => updateProfile(user, { displayName: name})))
}
}
