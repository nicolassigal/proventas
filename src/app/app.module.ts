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
    SearchTextPipe
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
  providers: [StatusService, AuthenticationService, AuthGuard, SpinnerService, DataStorageService, SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
