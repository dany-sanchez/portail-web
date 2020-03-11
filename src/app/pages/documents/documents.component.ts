import { Component, OnInit, ViewChild } from '@angular/core';
import { Document } from 'src/app/model/document';
import { DocumentService } from 'src/app/service/document.service';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DocumentsDialogComponent } from '../documents-dialog/documents-dialog.component';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  documents: Document[];
  displayedColumns: string[] = ['name', 'updated', 'actions'];
  dataSource: MatTableDataSource<Document>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private service: DocumentService, public dialog: MatDialog) {}

  getDocuments(): void {
    this.service.getAllDocuments().subscribe(documents => {
      // this.documents = documents.sort(
      //   (a, b) => b.updated.seconds - a.updated.seconds
      // );
      this.documents = documents;
      this.dataSource = new MatTableDataSource(this.documents);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit() {
    this.getDocuments();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteDocument(document: Document): void {
    this.service.deleteDocument(document);
  }

  openDialog() {
    const dialogRef = this.dialog.open(DocumentsDialogComponent, {
      width: '700px'
    });

    dialogRef.afterClosed().subscribe((fileList: FileList) => {
      console.log('The documents dialog was closed');
      if (fileList !== undefined) {
        Array.from(fileList).forEach(file => {
          this.service.addDocument(file);
        });
      }
    });
  }

  isRole(role: string): boolean {
    const userData = JSON.parse(localStorage.getItem('userData'));
    return userData !== null && userData.role === role;
  }

  get isAdminOrEmployee(): boolean {
    return this.isRole('admin') || this.isRole('employee');
  }
}
