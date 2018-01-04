import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class StatusService {
  locationSubject: Subject<any> = new Subject<any>();
  syncSubject: Subject<any> = new Subject<any>();
  networkSubject: Subject<any> = new Subject<any>();
  constructor() {}

  getCurrentLocation = () => {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(pos =>
        this.locationSubject.next(pos)
      );
    }
  };

  sync = () => {
    this.syncSubject.next(true);
    this.getCurrentLocation();
    this.locationSubject.subscribe(() => {
      this.syncSubject.next(false);
    });
  }

  getNetworkStatus = () => {
    return navigator.onLine;
  };
}
