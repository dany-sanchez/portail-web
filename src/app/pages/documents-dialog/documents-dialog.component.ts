import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatChipInputEvent } from '@angular/material';
import { Document } from 'src/app/model/document';

@Component({
  selector: 'app-documents-dialog',
  templateUrl: './documents-dialog.component.html',
  styleUrls: ['./documents-dialog.component.scss']
})
export class DocumentsDialogComponent implements OnInit {
  files: File[];

  constructor(public dialogRef: MatDialogRef<DocumentsDialogComponent>) {}

  selectDocument() {
    document
      .querySelector('app-documents-dialog #documents')
      .dispatchEvent(new MouseEvent('click'));
  }

  onFocus(event: any) {
    event.target.blur();
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  onSaveClick() {
    this.dialogRef.close(this.files);
  }

  onFilesChange(event: any) {
    this.files = event.target.files;
  }

  remove(file: File): void {
    this.files = Array.from(this.files).filter(f => f !== file);
    console.log(this.files);
  }

  ngOnInit() {}
}
