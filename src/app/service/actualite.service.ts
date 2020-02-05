import { Injectable } from '@angular/core';
import { Actualite } from '../model/actualite';

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {

  constructor() { }

  getActualites(): Actualite[] {
    return [
      {
        titre: 'Test titre',
        contenu: '<p>Test contenu</p>',
        date: new Date(Date.now())
      },
      {
        titre: 'Test titre',
        contenu: '<p>Test contenu</p>',
        date: new Date(Date.now())
      }
    ];
  }
}
