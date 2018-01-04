import { AuthenticationService } from './../shared/authentication.service';
import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  persons = [];
  name;
  lastname;
  constructor(private authService: AuthenticationService, private storage: DataStorageService) { }
  ngOnInit() {
    this.storage.getData('persons').subscribe(persons => console.log(persons));
  }

  put = () => {
    const person = { name: this.name, lastname: this.lastname };
    this.storage.putData('persons', person).then(data => console.log('DONE'));
  }
}
