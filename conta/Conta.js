import { Cliente } from '../Cliente.js'

export class Conta {
  constructor (saldoInicial, cliente, agencia) {
    if (this.constructor === Conta) {
      throw new Error('Não é possível instanciar classes do tipo Abstratas')
    }
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

  sacar () {
    throw new Error('Metodo Sacar é abstrato, favor implementa-lo na classe que extend de conta')
  }

  _sacar (valor, taxa) {
    const valorSacado = valor * taxa
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado
      return this._saldo
    }
    return 0
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
