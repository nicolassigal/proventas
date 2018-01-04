import { Component, OnInit } from '@angular/core';
import { StatusService } from './shared/status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private status: StatusService){}

  ngOnInit() {
    window.addEventListener('online', () => this.status.networkSubject.next(true));
    window.addEventListener('offline', () => this.status.networkSubject.next(false));
  }
}
