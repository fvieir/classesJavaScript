export class ContaCorrente {
    constructor (agencia, saldo, cliente) {
        this.agencia = agencia
        this.cliente = cliente
        this._saldo = saldo
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