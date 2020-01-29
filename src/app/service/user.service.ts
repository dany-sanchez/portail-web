import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): User[] {
    return [
      {
        firstname: 'Hugo',
        lastname: 'Wehbe',
        email: 'h@wb.fr',
        role: 'admin',
        imgurl: 'https://avatars1.githubusercontent.com/u/19188789?s=400&v=4'
      },
      {
        firstname: 'Dany',
        lastname: 'Sanchez',
        email: 'd@sz.fr',
        role: 'admin',
        imgurl: 'https://avatars0.githubusercontent.com/u/26908481?s=460&v=4'
      },
      {
        firstname: 'Dany',
        lastname: 'Sanchez',
        email: 'd@sz.fr',
        role: 'admin',
        imgurl: 'https://avatars0.githubusercontent.com/u/26908481?s=460&v=4'
      },
      {
        firstname: 'Hugo',
        lastname: 'Wehbe',
        email: 'h@wb.fr',
        role: 'admin',
        imgurl: 'https://avatars1.githubusercontent.com/u/19188789?s=400&v=4'
      },
      {
        firstname: 'Dany',
        lastname: 'Sanchez',
        email: 'd@sz.fr',
        role: 'admin',
        imgurl: 'https://avatars0.githubusercontent.com/u/26908481?s=460&v=4'
      }
    ];
  }
}
