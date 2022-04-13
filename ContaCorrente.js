import { Cliente } from "./Cliente.js"

export class ContaCorrente {
    constructor (agencia, saldo, cliente) {
        this.agencia = agencia
        this._cliente = cliente
        this._saldo = saldo
    }

    set cliente (novoValor) {
        if (novoValor instanceof Cliente)
        this._cliente = novoValor
    }

    get cliente () {
        return this._cliente
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