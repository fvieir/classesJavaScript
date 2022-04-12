class Cliente {
    constructor (nome, cpf) {
        this.nome = nome
        this.cpf = cpf
    }
}

class ContaCorrente {
    constructor (agencia, saldo) {
        this.agencia = agencia
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
}

const cliente_1 = new Cliente('Fabrício','111-111-111-11')
const cliente_2 = new Cliente('Natalia','111-111-111-11')

const contaCorrenteFabricio = new ContaCorrente('0137', 0)
contaCorrenteFabricio.depositar(1000)
contaCorrenteFabricio.sacar(200)
contaCorrenteFabricio.extrato()

// console.log(cliente_1, cliente_2)
// console.log(contaCorrenteFabricio)

