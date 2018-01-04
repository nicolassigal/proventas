import { Component, OnInit } from '@angular/core';
import { StatusService } from './../shared/status.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {
  network: boolean;
  geolocation;
  syncing = false;
  constructor(private status: StatusService, private router: Router) { }

  ngOnInit() {
    this.getNetworkStatus();
    this.status.getCurrentLocation();
    this.status.locationSubject.subscribe(location => this.geolocation = location.coords);
    this.status.syncSubject.subscribe(status => this.syncing = status);
    this.status.networkSubject.subscribe(status => this.network = status);
  }

  sync = () => {
    this.status.sync();
  }

  getNetworkStatus = () => {
    this.network = this.status.getNetworkStatus();
    console.log(this.network);
  }
}
