import { Cliente } from './Cliente.js'
import { Conta } from './Conta.js'
import { ContaCorrente } from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js'

const cliente1 = new Cliente('Fabrício', '111-111-111-11')
const contaCorrenteFabricio = new ContaCorrente(0.00, cliente1, '0137')

const cliente2 = new Cliente('Nath', '111-111-111-11')
const contaCorrenteNath = new ContaPoupanca(0.00, cliente2, '0137')

const conta = new Conta(0, cliente1, '137')

console.log(conta)

console.log(contaCorrenteFabricio, contaCorrenteNath)
