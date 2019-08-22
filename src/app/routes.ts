import { Routes } from '@angular/router';
import { ListClientesComponent } from './cliente/list-clientes/list-clientes.component';
import { NewClienteComponent } from './cliente/new-cliente/new-cliente.component';
import { ShowClienteComponent } from './cliente/show-cliente/show-cliente.component';
import { EditClienteComponent } from './cliente/edit-cliente/edit-cliente.component';

export const routes: Routes = [
  { path: 'books', component: ListClientesComponent },
  { path: 'books/new', component: NewClienteComponent },
  { path: 'books/:id', component: ShowClienteComponent },
  { path: 'books/:id/edit', component: EditClienteComponent }
];
