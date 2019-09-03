import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})
export class ListClientesComponent implements OnInit {
  public clientes: Cliente [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clienteService: ClienteService
  ) { }
  
  ngOnInit() {
    this.clientes = this.loadClientes();
  }

  loadClientes(): Cliente[] {
    return this.clienteService.list();
  }

}