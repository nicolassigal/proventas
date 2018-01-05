import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SidebarService {
  sidebar;
  navbarTitle;
  titleSubject: Subject<any> = new Subject<any>();
  constructor() { }

  init = (sidebar) => {
    console.log('sidebar', sidebar);
    this.sidebar = sidebar;
  }

  open = () => {
    this.sidebar.open();
  }

  close = () => {
    this.sidebar.close();
  }

  toggle = () => {
    this.sidebar.toggle();
  }

  getTitle = () => {
    return this.navbarTitle;
  }

  setTitle = (title) => {
    this.navbarTitle = title;
    this.titleSubject.next(this.navbarTitle);
  }
}
