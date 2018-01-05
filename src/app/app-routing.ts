import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { ClientsComponent } from './routes/clients/clients.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], children: [
    {path: 'clients', component: ClientsComponent, data: [{title: 'Clientes'}] }
  ]},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  HomeComponent,
  LoginComponent,
  RegisterComponent,
  ClientsComponent
];
