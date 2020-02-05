import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs: AngularFirestore) { }

  public getAllUsers(): Observable<User[]> {
    return this.afs.collection<User>('users').valueChanges()
  }
}
