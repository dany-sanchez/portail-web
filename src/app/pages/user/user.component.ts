import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  firstname: string = "Toto";
  lastname: string = "Nom toto";
  email: string = "toto@toto.fr";

  constructor() { }

  ngOnInit() {
  }

}
