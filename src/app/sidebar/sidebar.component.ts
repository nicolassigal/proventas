import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { SpinnerService } from '../shared/spinner/spinner.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(private auth: AuthenticationService,private router: Router, private spinner: SpinnerService) { }

  ngOnInit() {
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
}
