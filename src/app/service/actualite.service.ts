import { Injectable } from '@angular/core';
import { Actualite } from '../model/actualite';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {

  constructor(private afs: AngularFirestore) { }

  getActualites(): Observable<Actualite[]> {
    return this.afs.collection<Actualite>('actualites').snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Actualite;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }
}
