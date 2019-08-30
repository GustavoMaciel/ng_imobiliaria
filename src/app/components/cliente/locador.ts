import { Cliente } from './cliente';
import { Endereco } from './endereco';

export class Locador extends Cliente {
    constructor(
        nome: string,
        rg: string,
        public cnpj: string,
        telefone: string,
        email: string,
        profissao: string,
        endereco: Endereco,
        tipoCliente: string,
    ){
        super(nome, rg, telefone, email, profissao, endereco, tipoCliente)
    }
}