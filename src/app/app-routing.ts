import { CurrencyComponent } from './routes/currency/currency.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { ClientsComponent } from './routes/clients/clients.component';
import { ClientListComponent } from './routes/clients/list/list.component';
import { ClientAddComponent } from './routes/clients/add/add.component';
import { ClaimsComponent } from './routes/claims/claims.component';
import { ClaimsListComponent } from './routes/claims/list/list.component';
import { ClaimsAddComponent } from './routes/claims/add/add.component';
import { ListEmployeeComponent } from './routes/employees/list/list.component';
import { AddEmployeeComponent } from './routes/employees/add/add.component';
import { EmployeesComponent } from './routes/employees/employees.component';
import { ClaimsViewComponent } from './routes/claims/view/view.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], children: [
    {path: 'clients', component: ClientsComponent, children: [
      {path: 'list', component: ClientListComponent, data: [{title: 'Clientes'}]},
      {path: 'add', component: ClientAddComponent, data: [{title: 'Agregar Cliente'}]},
      {path: 'edit', component: ClientAddComponent, data: [{title: 'Editar Cliente'}]}
    ]},
    {path: 'claims', component: ClaimsComponent, children: [
      {path: 'list', component: ClaimsListComponent, data: [{title: 'Reclamos'}]},
      {path: 'add', component: ClaimsAddComponent, data: [{title: 'Agregar Reclamo'}]},
      {path: 'edit', component: ClaimsAddComponent, data: [{title: 'Editar Reclamo'}]},
      {path: 'view', component: ClaimsViewComponent, data: [{title: 'Reclamo'}]}
    ]},
    {path: 'employees', component: EmployeesComponent, children: [
      {path: 'list', component: ListEmployeeComponent, data: [{title: 'Personal'}]},
      {path: 'add', component: AddEmployeeComponent, data: [{title: 'Agregar Personal'}]},
      {path: 'edit', component: AddEmployeeComponent, data: [{title: 'Editar Personal'}]},
    ]},
    {path: 'currency', component: CurrencyComponent, data: [{title: 'Divisas'}]}
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
  ClientsComponent,
  ClientListComponent,
  ClientAddComponent,
  ClaimsAddComponent,
  ClaimsListComponent,
  ClaimsComponent,
  CurrencyComponent,
  EmployeesComponent,
  ListEmployeeComponent,
  AddEmployeeComponent,
  ClaimsViewComponent
];
