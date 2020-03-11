import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
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
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NavComponent } from './pages/nav/nav.component';
import { UserComponent } from './pages/user/user.component';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { environment } from '../environments/environment';
import { UsersComponent } from './pages/users/users.component';
import { RegisterComponent } from './register/register.component';
import { ActualiteComponent } from './pages/actualite/actualite.component';
import {
  ActualitesComponent,
  ActualitesDialogComponent
} from './pages/actualites/actualites.component';
import { NewActualiteComponent } from './pages/new-actualite/new-actualite.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import { UserDialogComponent } from './pages/user-dialog/user-dialog.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { DocumentsDialogComponent } from './pages/documents-dialog/documents-dialog.component';

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
    RegisterComponent,
    ActualiteComponent,
    ActualitesComponent,
    ActualitesDialogComponent,
    NewActualiteComponent,
    UserDialogComponent,
    DocumentsComponent,
    DocumentsDialogComponent
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
    AngularFireStorageModule,
    AngularFireAuthModule,
    MatDialogModule,
    CKEditorModule,
    FormsModule,
    MatSelectModule,
    MatChipsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  entryComponents: [
    ActualitesDialogComponent,
    UserDialogComponent,
    DocumentsDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
