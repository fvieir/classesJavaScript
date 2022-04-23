export class Funcionarios {
    constructor (nome, cpf, salario) {
        if (this.constructor === Funcionarios) {
            throw new Error ('Classe abstrata, não pode ser instancianda, tente classes não abstrata ou as filhas dessa classe')
        }
        this._nome = nome
        this._cpf = cpf
        this._salario = salario
        this._senha
    } 

    get senha () {
        return this._senha
    }

    _cadastrarSenha (senha) {
        this._senha = senha
    }
}