import { startWith } from 'rxjs/operators';
import { SidebarService } from './../../sidebar/sidebar.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { map } from 'rxjs/operator/map';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients: any;
  fullname;
  constructor(private route: ActivatedRoute, private sidebarService: SidebarService, private storage: DataStorageService) {
   }

  ngOnInit() {
    this.sidebarService.setTitle(this.route.snapshot.data[0]['title']);
    this.storage.getAllData('persons').subscribe(clients => {
        clients.forEach(client => client['displayText'] = `${client['name']} ${client['lastname']}`);
        this.clients = clients;
      });
  }

  addClient = () => {

  }
}