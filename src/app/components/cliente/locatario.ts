import { Cliente } from './cliente';
import { Endereco } from './endereco';

export class Locatario extends Cliente {
    constructor(
        nome: string,
        rg: string,
        public cpf: string,
        telefone: string,
        email: string,
        profissao: string,
        endereco: Endereco,
        tipoCliente: string,
    ){
        super(nome, rg, telefone, email, profissao, endereco, tipoCliente)
    }
}