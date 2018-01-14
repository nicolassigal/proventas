import {DataStorageService} from '../../../shared/data-storage.service';
import {SpinnerService} from '../../../shared/spinner/spinner.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarService } from '../../../sidebar/sidebar.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ClaimsListComponent implements OnInit {
  claims: any;
  search: string;
  nodata;
  constructor(private sidebarService: SidebarService,
    private route: ActivatedRoute,
    private spinner: SpinnerService,
    private storage: DataStorageService,
    private router: Router) { }

  ngOnInit() {
    this.sidebarService.setTitle(this.route.snapshot.data[0]['title']);
    this.spinner._show();
    this.storage.getAllData('claims').subscribe(claims => {
      this.spinner._hide();
      this.nodata = claims.length ? false : true;
        this.claims = claims;
      });
  }

  addClaim = () => {
    this.router.navigate(['add'], {relativeTo: this.route.parent});
  }

  edit = (claim) => {
    this.router.navigate(['edit', claim], {relativeTo: this.route.parent});
  }
}
