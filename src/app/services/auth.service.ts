import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _currentUser: any;

  private authStatusSub = new BehaviorSubject(this.currentUser);

  currentAuthStatus = this.authStatusSub.asObservable();

  constructor(public fireAuth: AngularFireAuth, private router: Router) {
    this.authStatusListener();
  }

  authStatusListener() {
    this.fireAuth.onAuthStateChanged((credential: any) => {
      if (credential) {
        this.authStatusSub.next(credential);
      }
      else {
        this.authStatusSub.next(null);
        console.log("user ID", credential.user?.uid, "logged out");
      }
    });
  }

  register(email: string, password: string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password)
      .then((credential) => {
        console.log('User ID: ', credential.user?.uid);
        if (credential) {
          alert(`Welcome ${credential.user?.email}`);
          this.router.navigate(['/passengers'])
        }
      })
      .catch(error => {
        console.log("Error : ", error);
      });

  }

  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password)
      .then((credential) => {
        console.log("user ID", credential.user?.uid);
        if (credential) {
          window.sessionStorage.setItem("user", credential.user!.uid)
          alert(`Welcome ${credential.user?.email}`);
          this.router.navigate(['/passengers']);
        }
      })
      .catch(error => {
        console.log("Error : ", error);
      });
  }

  signOut() {
    return this.fireAuth.signOut();
  }

  public get currentUser(): any {
    return this._currentUser;
  }

  public set currentUser(value: any) {
    this._currentUser = value;
  }





}

