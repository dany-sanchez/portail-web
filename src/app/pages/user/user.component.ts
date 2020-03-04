import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: User;

  constructor(private route: ActivatedRoute, private service: UserService) {}

  getUser(id: string): void {
    this.service.getAllUsers().subscribe(users => {
      this.user = users.filter(user => user.id === id).shift();
    });
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.getUser(id);
  }
}
