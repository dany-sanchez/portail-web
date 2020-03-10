import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { RoleService } from 'src/app/service/role.service';

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
    private roleService: RoleService,
    public dialog: MatDialog,
  ) {  }

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

  getRoleViewValue(): string {
    return this.roleService.getAllRoles().filter((role) => role.value === this.user.role).shift().viewValue;
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.getUser(id);
  }

  isRole(role: string): boolean {
    const userData = JSON.parse(localStorage.getItem('userData'));
    return userData !== null && userData.role === role;
  }

  isSelf(): boolean {
    const userData = JSON.parse(localStorage.getItem('userData'));
    return userData !== null && userData.id === this.user.id;
  }

  get isAdmin(): boolean {
    return this.isRole('admin');
  }

  get isEmployeeAndSelf(): boolean {
    return this.isSelf() && this.isRole('employee');
  }

}
