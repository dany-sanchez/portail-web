import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './pages/nav/nav.component';
import { LoginComponent } from './pages/login/login.component'
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component'
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: 'menu', component: NavComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
