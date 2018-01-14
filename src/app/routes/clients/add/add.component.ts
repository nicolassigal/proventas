import {StatusService} from '../../../shared/status.service';
import { Component, OnInit } from '@angular/core';
import {SidebarService} from '../../../sidebar/sidebar.service';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { DataStorageService } from '../../../shared/data-storage.service';
import { SpinnerService } from '../../../shared/spinner/spinner.service';

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
  btnText = 'Agregar';

  constructor(
    private sidebarService: SidebarService,
    private route: ActivatedRoute,
    private router: Router,
    private storage: DataStorageService,
    private status: StatusService,
    private spinner: SpinnerService) {
   }

  ngOnInit() {
    this.route.params.subscribe(client => {
      if (client.id) {
        console.log(client);
        this.btnText = 'Editar';
        this.name = client.name || '';
        this.lastname = client.lastname || '';
        this.email = client.email || '';
        this.companyName = client.companyName || '';
        this.phone = client.phone || '';
        this.location = client.location !== 'null' &&  client.location !== 'undefined' ?  client.location : '';
      }
    });
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
  this.spinner._show();
  this.storage.putData('persons', person).then(() => {
    this.spinner._hide();
    this.router.navigate(['list'], {relativeTo: this.route.parent});
  });

  }
}
