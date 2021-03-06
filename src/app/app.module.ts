import { DataStorageService } from './shared/data-storage.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule, routingComponents } from './app-routing';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from './app-material';
import { StatusService } from './shared/status.service';
import { StatusBarComponent } from './status-bar/status-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { AuthenticationService } from './shared/authentication.service';
import { AuthGuard } from './shared/auth.guard';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { SpinnerService } from './shared/spinner/spinner.service';
import { HttpModule } from '@angular/http';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { SidebarService } from './sidebar/sidebar.service';
import { CardListComponent } from './shared/card-list/card-list.component';
import { CardComponent } from './shared/card/card.component';
import { SearchTextPipe } from './shared/search-text.pipe';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { EmployeesComponent } from './routes/employees/employees.component';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any> {
      'pinch': { enable: false },
      'rotate': { enable: false }
  };
}


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    routingComponents,
    StatusBarComponent,
    SpinnerComponent,
    NavbarComponent,
    DashboardComponent,
    CardListComponent,
    CardComponent,
    SearchTextPipe,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [StatusService,
    AuthenticationService,
    AuthGuard,
    SpinnerService,
    DataStorageService,
    SidebarService,
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
