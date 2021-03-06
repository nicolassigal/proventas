import { Component, OnInit } from '@angular/core';
import { StatusService } from './../shared/status.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {
  network: boolean;
  geolocation;
  syncing = false;
  url;
  constructor(private status: StatusService, private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getNetworkStatus();
    this.status.getCurrentLocation();
    this.status.locationSubject.subscribe(location => {
      this.geolocation = location.coords;
    });
    this.status.syncSubject.subscribe(status => this.syncing = status);
    this.status.networkSubject.subscribe(status => this.network = status);
  }

  sync = () => {
    this.status.sync();
  }

  geolocate = () => {
    const location = `${this.geolocation.latitude}, ${this.geolocation.longitude}`;
    const url = `https://www.google.com/maps/search/${location}/@${location},13z`;
    window.location.href = url;
  }

  getNetworkStatus = () => {
    this.network = this.status.getNetworkStatus();
    console.log(this.network);
  }
}
