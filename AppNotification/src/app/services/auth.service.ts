import { Router } from '@angular/router';
import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userData: any;

  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
  ) {
    this.ngFireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  // Login in with email/password
  SignIn(email: string, password: string) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }
  SignOut(){
    this.router.navigateByUrl('login')
    return this.ngFireAuth.signOut();
  }
  getUser(){
    return this.ngFireAuth.user;
  }

  // Register user with email/password
  RegisterUser(email: string, password: string) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }
}