import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: User;

  constructor(
    private route: ActivatedRoute,
    private service: UserService,
    public dialog: MatDialog
  ) {}

  getUser(id: string): void {
    if (id !== null) {
      this.service.getAllUsers().subscribe(users => {
        this.user = users.filter(user => user.id === id).shift();
      });
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '700px',
      data: { user: this.user }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The user dialog was closed');
      if (result !== undefined) {
        for (const field of Object.keys(result)) {
          this.user[field] = result[field];
        }
        this.service.updateUser(this.user);
      }
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.getUser(id);
  }
}
