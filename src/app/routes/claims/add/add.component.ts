import {DataStorageService} from '../../../shared/data-storage.service';
import {SpinnerService} from '../../../shared/spinner/spinner.service';
import {ActivatedRoute} from '@angular/router';
import {SidebarService} from '../../../sidebar/sidebar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class ClaimsAddComponent implements OnInit {

  constructor(private sidebarService: SidebarService,
    private route: ActivatedRoute,
    private spinner: SpinnerService,
    private storage: DataStorageService) { }

  ngOnInit() {
    this.sidebarService.setTitle(this.route.snapshot.data[0]['title']);
  }

}
