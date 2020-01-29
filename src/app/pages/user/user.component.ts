import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User = {
    firstname: "Hugo",
    lastname: "Wehbe",
    email: "h@wb.fr",
    role: "admin",
    imgurl: "https://avatars1.githubusercontent.com/u/19188789?s=400&v=4"
  };

  profileForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    role: ['', Validators.required],
    imgurl: [''],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
