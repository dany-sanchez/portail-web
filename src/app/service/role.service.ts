import { Injectable } from '@angular/core';
import { Role } from '../model/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  constructor() {}

  getAllRoles(): Role[] {
    return [
      { value: 'client', viewValue: 'Client' },
      { value: 'employee', viewValue: 'Employé' },
      { value: 'admin', viewValue: 'Administrateur' }
    ];
  }
}
