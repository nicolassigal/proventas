import { Component, OnInit } from '@angular/core';
import { SidebarService } from './../../../sidebar/sidebar.service';
import { DataStorageService } from '../../../shared/data-storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ClientListComponent implements OnInit {
  clients: any;
  fullname;
  search;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private sidebarService: SidebarService,
    private storage: DataStorageService) { }

  ngOnInit() {
    this.sidebarService.setTitle(this.route.snapshot.data[0]['title']);
    this.storage.getAllData('persons').subscribe(clients => {
        clients.forEach(client => client['displayText'] = `${client['name']} ${client['lastname']}`);
        this.clients = clients;
      });
  }
  addClient = () => {
    this.router.navigate(['add'], {relativeTo: this.route.parent});
  }

  call = (tel) => {
    window.location.href = `tel:${tel}`;
  }

  email = (mail) => {
    window.location.href = `mailTo:${mail}`;
  }

  map = (location) => {
    window.location.href = `https://www.google.com/maps/search/${location}/@${location},13z`;
  }
}
