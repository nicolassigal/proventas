import { SidebarService } from './../../sidebar/sidebar.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title;
  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
    this.title = this.sidebarService.getTitle();
    this.sidebarService.titleSubject.subscribe(title => this.title = title);
  }

  openSideNav = () => {
    this.sidebarService.open();
  }

  back = () => {
    window.history.back();
  }
}
