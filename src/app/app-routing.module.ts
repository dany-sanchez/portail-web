import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './pages/nav/nav.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { UsersComponent } from './pages/users/users.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'menu',
    component: NavComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
    ]
  },
  { path: 'user/:id', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
