import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SpinnerService {
  status= false;
  showSubject: Subject<any> = new Subject<any>();
  constructor() { }

  _getStatus = () => {
    return this.status;
  }

  _show = () => {
    this.status = true;
    this.showSubject.next(this.status);
  }

  _hide = () => {
    this.status = false;
    this.showSubject.next(this.status);
  }
}
