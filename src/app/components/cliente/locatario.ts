import { Cliente } from './cliente';
import { Endereco } from './endereco';

export class Locatario extends Cliente {
    constructor(
        nome: string,
        rg: string,
        orgaoEx: string,
        public cpf: string,
        telefone: string,
        email: string,
        profissao: string,
        endereco: Endereco,
        tipoCliente: string,
    ){
        super(nome, rg, orgaoEx, telefone, email, profissao, endereco, tipoCliente)
    }
}