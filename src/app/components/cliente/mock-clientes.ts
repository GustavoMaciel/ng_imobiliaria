import {Cliente} from "./cliente";
import { Endereco } from './endereco';
import { Locador } from './locador';
import { Locatario } from './locatario';
/*
'Gustavo Maciel', "1234567", true,
      "1234567890", "83999999999", 
      "gustavo.maciel@dcx.ufpb.com", "Estudante", 
      new Endereco(
          "rua", "centro", "1234", "12345678"
      ), "Executivo"
*/
export const LOCADORES: Locador[] = [
    {id: 1, nome:'John Doe', rg:'1234567', cnpj: '05.526.392/0001-40', telefone: '83999999999', 
    email:'john.doe@gmail.com', profissao: 'CEO', 
    endereco: new Endereco('rua','bairro','numero','cep'), tipoCliente:'Locador'}
]

export const LOCATARIOS: Locatario[] = [
    {id: 2, nome:'Gustavo Maciel', rg:'1234567', cpf: '123.321.123-32', telefone: '83999999999', 
    email:'gustavo.maciel@dce.ufpb.br', profissao: 'Estudante', 
    endereco: new Endereco('rua','bairro','numero','cep'), tipoCliente:'Locatario'}
]