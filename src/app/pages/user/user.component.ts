import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  firstname: string = "Toto";
  lastname: string = "Nom toto";
  email: string = "toto@toto.fr";

  profileForm = this.fb.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    email: ['', Validators.required, Validators.email],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
