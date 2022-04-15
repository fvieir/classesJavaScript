import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

const cliente_1 = new Cliente('Fabrício','111-111-111-11')
const cliente_2 = new Cliente('Natalia','111-111-111-11')

const contaCorrenteFabricio = new ContaCorrente('0137', cliente_1)
const conta_2 = new ContaCorrente('2587',cliente_2)

console.log(ContaCorrente.numeroDeContas)