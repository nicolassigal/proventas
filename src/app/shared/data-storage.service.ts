import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class DataStorageService {
  uri = 'https://proventas-21616.firebaseio.com/';
  token;
  persondb;
  personsSubject: Subject<any> = new Subject<any>();
  persons = [];
  constructor(private http: Http, private auth: AuthenticationService, private database: AngularFirestore) {
    this.token = this.auth._getToken();
  }

  idGen = () => {
    return this.database.createId();
  }

  putData = (collection, content) => {
    return this.database.collection(collection).doc(`${content.id}`).set(content);
  }

  getDocument = (collection, documentId) => {
    return this.database.collection(collection).doc(documentId).valueChanges();
  }

  getAllData = (collection, query?) => {
    if (query) {
      switch (query.q) {
        case 'orderBy':
          return this.database.collection(collection, ref => ref.orderBy(query.key)).valueChanges();
        case 'where':
          return this.database.collection(collection, ref => ref.where(query.key, query.method, query.value)).valueChanges();
        default:
          this.database.collection(collection).valueChanges();
      }
    } else {
      return this.database.collection(collection).valueChanges();
    }
  }
}
