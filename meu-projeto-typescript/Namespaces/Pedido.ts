import { Cliente } from "./Cliente";

export class Pedido extends Cliente {
    constructor(nome: string, public produto: string, public valor: number) {
        super(nome)
    }
    
} 

const pedido1 = new Pedido('Nicolas','X-bacon', 15)

function exibirPedido(pedido: Pedido): String {
    return `O nome do cliente é ${pedido.nome} que pediu ${pedido.produto} no valor total de ${pedido.valor} reais`
}


console.log(exibirPedido(pedido1))