import { Routes } from '@angular/router';
import { ListClientesComponent } from './cliente/list-clientes/list-clientes.component';
import { NewClienteComponent } from './cliente/new-cliente/new-cliente.component';
import { ShowClienteComponent } from './cliente/show-cliente/show-cliente.component';
import { EditClienteComponent } from './cliente/edit-cliente/edit-cliente.component';

export const routes: Routes = [
  { path: 'clientes', component: ListClientesComponent },
  { path: 'clientes/novo', component: NewClienteComponent },
  { path: 'clientes/:id', component: ShowClienteComponent },
  { path: 'clientes/:id/editar', component: EditClienteComponent }
];
