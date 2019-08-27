import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators'; 
import { Cliente } from '../cliente';
import {Endereco} from '../endereco';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-show-cliente',
  templateUrl: './show-cliente.component.html',
  styleUrls: ['./show-cliente.component.css']
})
export class ShowClienteComponent implements OnInit {
  public cliente: Cliente;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
    this.clienteService.add(new Cliente(
      'Gustavo Maciel', "1234567", true,
      "1234567890", "83999999999", 
      "gustavo.maciel@dcx.ufpb.com", "Estudante", 
      new Endereco(
          "rua", "centro", "1234", "12345678"
      ), "Executivo"
  ));


    this.route.paramMap.pipe(
    switchMap(
      (params: ParamMap) => this.loadCliente(+params.get('id'))
    ))
    .subscribe(
      (cliente: Cliente) => this.cliente = cliente
    );
  }

  loadCliente(idCliente: number): Promise<Cliente> {
    return new Promise(
      (resolve) => resolve(this.clienteService.getById(idCliente))
    )
  }

  back () {
    this.router.navigate(['/clientes']);
    this.clienteService.clearMessage();
    return false;
  }

  edit() {
    this.clienteService.clearMessage();
    this.router.navigate(['/clientes', this.cliente.id, 'editar']);
    return false;
  }

}
