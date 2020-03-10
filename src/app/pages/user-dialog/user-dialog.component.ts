import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from 'src/app/model/user';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserDialogData } from 'src/app/model/user-dialog-data';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {
  user: User;
  profileForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserDialogData,
    private fb: FormBuilder
  ) {
    this.user = data.user;
    this.profileForm = this.fb.group({
      firstname: [this.user.firstname],
      lastname: [this.user.lastname],
      email: [this.user.email, [Validators.required, Validators.email]],
      role: [this.user.role],
      imgurl: [this.user.imgurl],
      team: [this.user.team],
      phone: [this.user.phone],
    });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.dialogRef.close(this.profileForm.value);
  }

  ngOnInit() {}
}
