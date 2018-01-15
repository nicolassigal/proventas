import {SpinnerService} from '../../../shared/spinner/spinner.service';
import {DataStorageService} from '../../../shared/data-storage.service';
import {SidebarService} from '../../../sidebar/sidebar.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListEmployeeComponent implements OnInit {
  employees: any;
  fullname;
  search;
  nodata;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private sidebarService: SidebarService,
    private storage: DataStorageService,
    private spinner: SpinnerService) { }

  ngOnInit() {
    this.sidebarService.setTitle(this.route.snapshot.data[0]['title']);
    this.spinner._show()
    this.storage.getAllData('employees').subscribe(employees => {
      this.spinner._hide();
      this.nodata = employees.length ? false : true;
      employees.forEach(employee => employee['displayText'] = `${employee['name']} ${employee['lastname']}`);
        this.employees = employees;
      });
  }
  addEmployee = () => {
    this.router.navigate(['add'], {relativeTo: this.route.parent});
  }

  edit = (employee) => {
    this.router.navigate(['edit', employee], {relativeTo: this.route.parent});
  }

  remove = (employee) => {}

  call = (tel) => {
    window.location.href = `tel:${tel}`;
  }

  email = (mail) => {
    window.location.href = `mailTo:${mail}`;
  }
}
