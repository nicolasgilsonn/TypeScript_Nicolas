interface Produto {
    nome: string;
    preco: number;
   }

type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';

function Compra(produto: Produto, formapagamento:FormaPagamento): string {
    return `O produto: ${produto.nome} custa ${produto.preco} e vai ser pago no ${formapagamento}`
}

const produto1: Produto = {
    nome: 'Videogame',
    preco: 5000
}

const formapagamento1: FormaPagamento = 'pix'

console.log(Compra(produto1, formapagamento1))