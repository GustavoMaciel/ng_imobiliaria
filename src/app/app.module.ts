import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowClienteComponent } from './components/cliente/show-cliente/show-cliente.component';
import { ListClientesComponent } from './components/cliente/list-clientes/list-clientes.component';
import { EditClienteComponent } from './components/cliente/edit-cliente/edit-cliente.component';
import { NewClienteComponent } from './components/cliente/new-cliente/new-cliente.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavComponent } from './components/nav/nav.component';
import { ClienteComponent } from './components/cliente/cliente/cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowClienteComponent,
    ListClientesComponent,
    EditClienteComponent,
    NewClienteComponent,
    LoginComponent,
    NavbarComponent,
    NavComponent,
    ClienteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
