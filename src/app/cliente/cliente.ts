import { Endereco } from './endereco';

export class Cliente {
    private _id: number;

    constructor(
        private _nome: string,
        private _rg: string,
        private _tipoCadastroPessoa: boolean,
        private _cadastroPessoa: string,
        private _telefone: string,
        private _email: string,
        private _profissao: string,
        private _endereco: Endereco,
        private _tipoCliente: string,
    ){}

    public get id(): number{
        return this._id
    }
    public get nome(): string {
        return this._nome
    }
    public get rg(): string{
        return this._rg
    }
    public get tipoCadastroPessoa(): boolean{
        return this._tipoCadastroPessoa
    }
    public get cadastroPessoa(): string {
        return this._cadastroPessoa;
    }
    public get telefone(): string{
        return this._telefone
    }
    public get email(): string {
        return this._email
    }
    public get profissao(): string{
        return this._profissao
    }
    public get endereco(): Endereco{
        return this._endereco
    }
    public get tipoCliente(): string{
        return this._tipoCliente
    }

    //Setters
    public set id(id: number){
        this._id = id
    }
    public set nome(nome: string) {
        this._nome = nome
    }
    public set rg(rg: string) {
        this._rg = rg
    }
    public set tipoCadastroPessoa(tipoCadastroPessoa: boolean) {
        this._tipoCadastroPessoa = tipoCadastroPessoa
    }
    public set cadastroPessoa(cadastroPessoa :string) {
        this._cadastroPessoa = cadastroPessoa
    }
    public set telefone(telefone: string) {
        this._telefone = telefone
    }
    public set email(email: string) {
        this._email = email
    }
    public set profissao(profissao: string) {
        this._profissao = profissao
    }
    public set endereco(endereco: Endereco) {
        this._endereco = endereco
    }
    public set tipoCliente(tipoCliente: string) {
        this._tipoCliente = tipoCliente
    }
}

/*
nome completo, RG + órgão
exp., CPF ou CNPJ, telefone, email,
profissão, endereço, tipo de cliente
(locador* ou locatário**).
*/