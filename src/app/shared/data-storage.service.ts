import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFirestore } from 'angularfire2/firestore';
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

  putData = (table, content) => {
   return this.database.collection(table).add(content);
  }

  getData = (table) => {
    return this.database.collection(table).valueChanges();
  }
}
