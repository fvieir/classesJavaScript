import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'
import { Conta } from './Conta.js'

const cliente1 = new Cliente('Fabrício', '111-111-111-11')
const contaCorrenteFabricio = new Conta(0.00, cliente1, '0137')

const cliente2 = new Cliente('Nath', '111-111-111-11')
const contaCorrenteNath = new Conta(0.00, cliente2, '0137')

console.log(Conta.numeroDeContas)
console.log(contaCorrenteFabricio, contaCorrenteNath)
