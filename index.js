class Cliente {
    constructor (nome, cpf) {
        this.nome = nome
        this.cpf = cpf
    }
}

class ContaCorrente {
    constructor (agencia, saldo) {
        this.agencia = agencia
        this.saldo = saldo
    }

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor
        }
    }

    depositar (valor) {
        this.saldo = valor
    }
}

const cliente_1 = new Cliente('Fabrício','111-111-111-11')
const cliente_2 = new Cliente('Natalia','111-111-111-11')

const contaCorrenteFabricio = new ContaCorrente('0137', '0,00')
contaCorrenteFabricio.depositar(1000)
contaCorrenteFabricio.sacar(1100)

console.log(cliente_1, cliente_2)
console.log(contaCorrenteFabricio)

