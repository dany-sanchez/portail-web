import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './pages/nav/nav.component';
import { LoginComponent } from './pages/login/login.component'


const routes: Routes = [
  {path: 'menu', component: NavComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
