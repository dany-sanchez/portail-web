import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

import { Router } from "@angular/router";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user: User;
  redirectUrl: string;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }

  async SignIn(email: string, password: string) {
    await this.afAuth.auth.signInWithEmailAndPassword(email, password)
    if (this.isLoggedIn) {
      let redirect = this.redirectUrl ? this.router.parseUrl(this.redirectUrl) : '/menu/dashboard';
      this.router.navigateByUrl(redirect);
    }
  }

  async register(email: string, password: string) {
    await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
  }

  async SignOut() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }

}
