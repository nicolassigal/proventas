import { Router } from '@angular/router';
import { Component, OnInit, AfterContentInit, ElementRef, ViewChild } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { SpinnerService } from '../shared/spinner/spinner.service';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterContentInit {
  activeRoute =  'Inicio';
  @ViewChild('sidenav') sidenav;
  constructor(private auth: AuthenticationService,
    private router: Router,
    private spinner: SpinnerService,
    private sidebarService: SidebarService,
    private el: ElementRef) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.sidebarService.init(this.sidenav);
  }

  logOut = () => {
    this.spinner._show();
    this.auth._logOut().then(() => {
      this.spinner._hide();
      localStorage.clear();
      window.location.reload();
    })
    .catch(error => console.log(error));
  }

  openSidebar = (direction) => {
    if (direction === 'right') {
      this.sidebarService.open();
    }
  }

  toggleSidenav = () => {
    this.sidebarService.toggle();
  }
}
