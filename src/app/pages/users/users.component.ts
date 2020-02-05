import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  //users: User[];
  public users: Observable<User[]>

  constructor(private userService: UserService) { }

  getUsers(): void {
    this.users = this.userService.getAllUsers();
  }

  ngOnInit() {
    this.getUsers();
  }

}
