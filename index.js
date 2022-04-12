import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

const cliente_1 = new Cliente('Fabrício','111-111-111-11')
const cliente_2 = new Cliente('Natalia','111-111-111-11')

const contaCorrenteFabricio = new ContaCorrente('0137', 0)
contaCorrenteFabricio.depositar(1000)
contaCorrenteFabricio.sacar(200)
// contaCorrenteFabricio.extrato()
contaCorrenteFabricio.cliente = cliente_1

const conta_2 = new ContaCorrente('2587',0)
contaCorrenteFabricio.transferir(100,conta_2)
conta_2.cliente = cliente_2

console.log(conta_2)
console.log(cliente_2)
