import { Cliente } from './Cliente.js'

export class Conta {
  static numeroDeContas = 0
  
  constructor (saldoInicial, cliente, agencia) {
    this._saldo = saldoInicial
    this._cliente = cliente
    this._agencia = agencia
    this._saldo = 0
    Conta.numeroDeContas += 1
  }

  set cliente (novoCliente) {
    if (novoCliente instanceof Cliente) { this._cliente = novoCliente }
  }

  get cliente () {
    return this._cliente
  }

  get saldo () {
    return this._saldo
  }

  sacar (valor) {
    let taxa = 1
    if (this._saldo >= valor) {
      this._saldo -= valor * taxa
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
