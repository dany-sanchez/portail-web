import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  constructor() {}

  getAllRoles(): object[] {
    return [
      { value: 'client', viewValue: 'Client' },
      { value: 'employee', viewValue: 'Employé' },
      { value: 'admin', viewValue: 'Administrateur' }
    ];
  }
}
