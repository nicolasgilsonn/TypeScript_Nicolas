export namespace Financeiro {
    export function calcularImposto(valor: number, taxa_imp: number): number {
        return valor * taxa_imp;
    }

    export function calcularDesconto(valor: number, taxa_desc: number): number {
        return valor * taxa_desc
    }

    export class Orcamento{
        constructor(public valorTotal: number, public itens: string[]) {}

    exibirValor(): string {
        return `Esse é o valor do orçameto de acordo com os itens R$${this.valorTotal}`
    }

    }

}

