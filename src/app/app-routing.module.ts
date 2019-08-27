import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';

import { ListClientesComponent } from './components/cliente/list-clientes/list-clientes.component';
import { NewClienteComponent } from './components/cliente/new-cliente/new-cliente.component';
import { ShowClienteComponent } from './components/cliente/show-cliente/show-cliente.component';
import { EditClienteComponent } from './components/cliente/edit-cliente/edit-cliente.component';
import { ClienteComponent } from './components/cliente/cliente/cliente.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'clientes', component: ClienteComponent, children: [
      {path: '', component: ListClientesComponent},
      { path: 'novo', component: NewClienteComponent },
      { path: ':id', component: ShowClienteComponent },
      { path: 'editar/:id', component: EditClienteComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
