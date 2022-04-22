import { Funcionarios } from "./Funcionarios.js"

export class Diretor extends Funcionarios {
    constructor (nome, cpf, salario) {
        super(nome, cpf, salario)
        this._nome = nome
        this._cpf = cpf
        this._salario = salario
        this._bonificacao = 2
    }
}
