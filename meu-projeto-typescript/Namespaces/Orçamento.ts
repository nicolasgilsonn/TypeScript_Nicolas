import { Financeiro } from "./Financeiro";

const calcularimposto = Financeiro.calcularImposto(600, 0.08);
console.log(`Valor do imposto: R$${calcularimposto}`)

const calculardesconto = Financeiro.calcularDesconto(600, 0.03);
console.log(`Valor do desconto: R$${calculardesconto}`)

const orcamento = new Financeiro.Orcamento(600, ['SSD', 'Caixa de som', 'USB 2TB'])
console.log(orcamento.exibirValor())