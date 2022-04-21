import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js'

const cliente1 = new Cliente('Fabrício', '111-111-111-11')
const contaCorrenteFabricio = new ContaCorrente(0.00, cliente1, '0137')
contaCorrenteFabricio.depositar(100)
contaCorrenteFabricio.sacar(50)

const cliente2 = new Cliente('Nath', '111-111-111-11')
const contaCorrenteNath = new ContaPoupanca(0.00, cliente2, '0137')
contaCorrenteNath.depositar(100)
contaCorrenteNath.sacar(10)

console.log(ContaCorrente.numeroDeContas)
console.log(contaCorrenteFabricio, contaCorrenteNath)
