import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Document } from '../model/document';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  storageRef: any;

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  getAllDocuments(): Observable<Document[]> {
    return this.afs
      .collection<Document>('documents')
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Document;
            data.id = a.payload.doc.id;
            return data;
          });
        })
      );
  }

  addDocument(file: File) {
    const documentId = this.afs.createId();
    const path = `documents/${file.name}`;
    const ref = this.storage.ref(path);

    ref.put(file).then(async snapshot => {
      console.log('Document successfully added in storage');
      const metadata = await snapshot.ref.getMetadata();
      const document: Document = {
        id: documentId,
        downloadUrl: await snapshot.ref.getDownloadURL(),
        name: file.name,
        size: metadata.size,
        type: metadata.type,
        updated: metadata.updated
      };

      this.afs
        .collection('documents')
        .doc(documentId)
        .set({...document, ...{updated: new Date(metadata.updated)}})
        .then(() => {
          console.log('Document successfully added in database');
        });
    });
  }

  deleteDocument(document: Document) {
    const path = `documents/${document.name}`;
    const ref = this.storage.ref(path);

    ref
      .delete()
      .toPromise()
      .then(() => console.log('Document successfully deleted from storage'))
      .catch(error => console.error(error));

    this.afs
      .collection('documents')
      .doc(document.id)
      .delete()
      .then(() => console.log('Document successfully deleted from database'));
  }
}
