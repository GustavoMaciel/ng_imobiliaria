import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { Locatario } from '../locatario';
import { Cliente } from '../cliente';
import { Endereco } from '../endereco';
import { Locador } from '../locador';

@Component({
    selector: 'app-new-cliente',
    templateUrl: './new-cliente.component.html',
    styleUrls: ['./new-cliente.component.css']
})
export class NewClienteComponent implements OnInit {

    formGroup: FormGroup;
    submitted: boolean = false;

    constructor(private formBuilder: FormBuilder, private service: ClienteService) { }

    ngOnInit() {
        this.generateForm();
    }

    generateForm() {
        this.formGroup = this.formBuilder.group(
            {
                nome: ['', [Validators.required]],
                rg: ['', [Validators.required]],
                orgaoEx: ['', [Validators.required]],
                telefone: ['', [Validators.required]],
                email: ['', [Validators.required, Validators.email]],
                profissao: ['', [Validators.required]],
                rua: ['', [Validators.required]],
                bairro: ['', [Validators.required]],
                numero: ['', [Validators.required]],
                cep: ['', [Validators.required]],
                tipoCliente: ['', [Validators.required]],
                cpf: ['', []],
                cnpj: ['', []]
            }
        );
    }

    get form() {
        return this.formGroup.controls;
    }

    onSubmit() {
        if (this.formGroup.invalid) {
            return;
        }
        if (this.form.tipoCliente.value === "locatario") {
            this.criarLocatario()
        } else {
            this.criarLocador();
        }
    }

    onReset() {
        this.formGroup.reset();
        this.submitted = false;
    }

    criarEndereco(): Endereco {
        return new Endereco(
            this.form.rua.value,
            this.form.bairro.value,
            this.form.numero.value,
            this.form.cep.value
        )
    }

    criarLocador(): Locador {
        return new Locador(
            this.form.nome.value,
            this.form.rg.value,
            this.form.orgaoEx.value,
            this.form.cnpj.value,
            this.form.telefone.value,
            this.form.email.value,
            this.form.profissao.value,
            // Endereço
            this.criarEndereco(),
            this.form.tipoCliente.value
        );
    }

    criarLocatario(): Locatario {
        return new Locatario(
            this.form.nome.value,
            this.form.rg.value,
            this.form.orgaoEx.value,
            this.form.cpf.value,
            this.form.telefone.value,
            this.form.email.value,
            this.form.profissao.value,
            // Endereço
            this.criarEndereco(),
            this.form.tipoCliente.value
        );
    }

}
