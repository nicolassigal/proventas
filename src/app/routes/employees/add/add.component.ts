import {SpinnerService} from '../../../shared/spinner/spinner.service';
import {DataStorageService} from '../../../shared/data-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SidebarService} from '../../../sidebar/sidebar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  companyName;
  name;
  lastname;
  phone;
  location;
  email;
  fullname;
  btnText = 'Agregar';

  constructor(
    private sidebarService: SidebarService,
    private route: ActivatedRoute,
    private router: Router,
    private storage: DataStorageService,
    private spinner: SpinnerService) {
   }

  ngOnInit() {
    this.route.params.subscribe(employee => {
      if (employee.id) {
        this.btnText = 'Editar';
        this.name =  employee.name !== 'null' &&  employee.name !== 'undefined' ?  employee.name : '';
        this.lastname =  employee.lastname !== 'null' &&  employee.lastname !== 'undefined' ?  employee.lastname : '';
        this.email =  employee.email !== 'null' &&  employee.email !== 'undefined' ?  employee.email : '';
        this.phone = employee.phone !== 'null' &&  employee.phone !== 'undefined' ?  employee.phone : '';
      }
    });
    this.sidebarService.setTitle(this.route.snapshot.data[0]['title']);
  }

  add = () => {
  const employee = {
      name: this.name || null,
      lastname: this.lastname || null,
      phone: this.phone || null,
      email: this.email  || null,
      fullname: `${this.name} ${this.lastname}`  || null,
      id: this.email  || null
    };
  this.spinner._show();
  this.storage.putData('employees', employee).then(() => {
    this.spinner._hide();
    this.router.navigate(['list'], {relativeTo: this.route.parent});
  });

  }
}
