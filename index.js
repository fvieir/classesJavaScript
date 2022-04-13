import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

const cliente_1 = new Cliente('Fabrício','111-111-111-11')
const cliente_2 = new Cliente('Natalia','111-111-111-11')

const contaCorrenteFabricio = new ContaCorrente('0137', cliente_1)
const conta_2 = new ContaCorrente('2587',cliente_2)

contaCorrenteFabricio.depositar(1000)
contaCorrenteFabricio.sacar(200)
contaCorrenteFabricio.extrato()

contaCorrenteFabricio.transferir(100,conta_2)

console.log(contaCorrenteFabricio)
console.log(conta_2)
