import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  show = false;
  constructor(private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.spinnerService.showSubject.subscribe(status => this.show = status);
  }

}
