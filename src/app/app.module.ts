<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { MatSliderModule } from '@angular/material/slider';
import { LoginComponent } from './pages/login/login.component';
import { NavComponent } from './pages/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { UserComponent } from './pages/user/user.component';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    UserComponent,
    ToolbarComponent,
    PageNotFoundComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    AngularFireModule.initializeApp(environment.firebase, 'portail-weeb'),
    AngularFirestoreModule, 
    AngularFireAuthModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
=======
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { LoginComponent } from './pages/login/login.component';
import { NavComponent } from './pages/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { UserComponent } from './pages/user/user.component';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    UserComponent,
    ToolbarComponent,
    PageNotFoundComponent,
    DashboardComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
>>>>>>> 37bbbe10d49570ec230bc7255d5d17295d74568b
