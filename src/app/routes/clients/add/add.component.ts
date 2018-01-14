import {StatusService} from '../../../shared/status.service';
import { Component, OnInit } from '@angular/core';
import {SidebarService} from '../../../sidebar/sidebar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from '../../../shared/data-storage.service';

@Component({
  selector: 'app-client-4add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class ClientAddComponent implements OnInit {
  companyName;
  name;
  lastname;
  phone;
  location;
  email;
  fullname;
  constructor(
    private sidebarService: SidebarService,
    private route: ActivatedRoute,
    private router: Router,
    private storage: DataStorageService,
    private status: StatusService) {
   }

  ngOnInit() {
    this.sidebarService.setTitle(this.route.snapshot.data[0]['title']);
  }

  markLocation = () => {
    this.status.getCurrentLocation();
    this.status.locationSubject.subscribe(location => {
      this.location = `${location.coords.latitude}, ${location.coords.longitude}`;
    });
  }

  add = () => {
  const person = {
      name: this.name || null,
      lastname: this.lastname || null,
      phone: this.phone || null,
      email: this.email  || null,
      fullname: `${this.name} ${this.lastname}`  || null,
      id: this.email  || null,
      location: this.location  || null,
      companyName: this.companyName || null
    };
  this.storage.putData('persons', person).then(() => {
    this.router.navigate(['list'], {relativeTo: this.route.parent});
  });

  }
}
