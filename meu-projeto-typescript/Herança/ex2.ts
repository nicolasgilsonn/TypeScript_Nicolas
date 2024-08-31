class ContaBancaria {
    constructor (public titular: string, public salario: number) {}

    exibirSaldo(): string {
        return `${this.titular} este é o saldo atual da conta ${this.salario}`
    }
}

class ContaCorrente extends ContaBancaria {

    constructor(titular: string, salario: number , public limiteCredito: number) {
        super(titular, salario)
    }
    exibirSaldo(): string {
        return `${super.exibirSaldo()} e o limite é de ${this.limiteCredito}`
    }

}

const contacorrente = new ContaCorrente('Nicolas', 5000, 7000)

console.log(contacorrente.exibirSaldo())




