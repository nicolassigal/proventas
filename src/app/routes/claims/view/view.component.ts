import {SidebarService} from '../../../sidebar/sidebar.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ClaimsViewComponent implements OnInit {
  claim;
  constructor(private sidebarService: SidebarService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((data: any) => {
      this.claim = JSON.parse(data.claimData);
      console.log(this.claim);
      this.sidebarService.setTitle(this.claim.tracking);
    });
  }
}
