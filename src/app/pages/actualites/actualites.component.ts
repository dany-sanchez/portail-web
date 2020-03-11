import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ActualiteService } from 'src/app/service/actualite.service';
import { Actualite } from 'src/app/model/actualite';

export interface DialogData {
  contenu: string;
  titre: string;
}


@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.scss']
})
export class ActualitesComponent implements OnInit {
  actualites: Actualite[];

  constructor(public dialog: MatDialog, public actualiteService: ActualiteService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ActualitesDialogComponent, {
      width: '1500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  getActualites(): void {
    this.actualiteService.getActualites().subscribe(actualites => {
      this.actualites = actualites.sort((a, b) => b.date.seconds - a.date.seconds);
    });
  }

  ngOnInit() {
    this.getActualites();
  }

  isRole(role: string): boolean {
    const userData = JSON.parse(localStorage.getItem('userData'));
    return userData !== null && userData.role === role;
  }

  get isAdmin(): boolean {
    return this.isRole('admin');
  }

}


@Component({
  selector: 'app-actualites-dialog',
  templateUrl: './actualites-dialog.component.html',
  styleUrls: ['./actualites.component.scss']

})
export class ActualitesDialogComponent {
  titre: string;
  contenu: string;
  public Editor = ClassicEditor;
  constructor(public dialogRef: MatDialogRef<ActualitesDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              public actualiteService: ActualiteService) {
    this.titre = '';
    this.contenu = '';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createActualites(): void {
    this.actualiteService.createActualite(this.titre, this.contenu);
    this.dialogRef.close();
  }

}
