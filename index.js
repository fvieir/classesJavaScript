import { Cliente } from './Cliente.js'
import { ContaCorrente } from './conta/ContaCorrente.js'
import { ContaPoupanca } from './conta/ContaPoupanca.js'
import { ContaSalario } from './conta/ContaSalario.js'
import { Diretor } from './funcionarios/Diretor.js'
import { Funcionarios } from './funcionarios/Funcionarios.js'
import { Gerente } from './funcionarios/Gerente.js'
import { SistemaAutentificacao } from './SistemaAutentificacao.js'

// ----- Contas ----- //
// const cliente1 = new Cliente('Fabrício', '111-111-111-11')
// const contaCorrenteFabricio = new ContaCorrente(0.00, cliente1, '0137')
// const cliente2 = new Cliente('Nath', '111-111-111-11')
// const contaCorrenteNath = new ContaPoupanca(0.00, cliente2, '0137')
// const contaSalario = new ContaSalario(cliente1)

// console.log(contaSalario)
// console.log(conta)
// console.log(contaCorrenteFabricio, contaCorrenteNath)

// ---------------------------------------------------//
// ----- Funcionarios ----- //

const func1 = new Gerente('Fabricio', '123', 12000)
func1._cadastrarSenha('123')
console.log(SistemaAutentificacao.login(func1, '123'))

const func2 = new Diretor('Fabricio', '123', 22000)
// console.log(func2)


const cliente3 = new Cliente('Fulano', '111-111-111-11', '456')
console.log(SistemaAutentificacao.login(cliente3, '456'))