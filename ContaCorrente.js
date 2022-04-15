import { Cliente } from "./Cliente.js"

export class ContaCorrente {
    static numeroDeContas = 0

    constructor (agencia, cliente) {
        this.agencia = agencia
        this.cliente = cliente
        this._saldo = 0
        ContaCorrente.numeroDeContas += 1
    }

    set cliente (novoCliente) {
        if (novoCliente instanceof Cliente)
        this._cliente = novoCliente
    }


    get cliente () {
        return this._cliente
    }

    get saldo () {
        return this._saldo
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor
        }
    }

    depositar (valor) {
        if (valor >= 0) {
            this._saldo = valor
        }
    }

    extrato () {
        console.log(`Saldo é ${this._saldo}`)
    }

    transferir (valor, conta) {
        const valorSacado = valor
        conta.depositar(valorSacado)
    }
}