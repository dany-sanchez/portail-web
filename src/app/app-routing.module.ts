import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './pages/nav/nav.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { UsersComponent } from './pages/users/users.component';
import { ActualiteComponent } from './pages/actualite/actualite.component';
import { ActualitesComponent } from './pages/actualites/actualites.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { AuthGuard } from './auth/auth.guard';
import { RegisterComponent } from './register/register.component';
import { DocumentsComponent } from './pages/documents/documents.component';

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
      {
        path: 'news',
        component: ActualitesComponent
      },
      {
        path: 'documents',
        component: DocumentsComponent
      },
      { path: 'user/:id', component: UserComponent },
      { path: 'news/:id', component: ActualiteComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
