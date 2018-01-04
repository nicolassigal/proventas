import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule, routingComponents } from './app-routing';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from './app-material';
import { StatusService } from './shared/status.service';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { AuthenticationService } from './shared/authentication.service';
import { AuthGuard } from './shared/auth.guard';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { SpinnerService } from './shared/spinner/spinner.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    routingComponents,
    StatusBarComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule
  ],
  providers: [StatusService, AuthenticationService, AuthGuard, SpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
