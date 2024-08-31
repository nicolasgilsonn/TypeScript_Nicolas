class Funcionario {
    nome: string;
    cargo: string;
    salario: number;

    constructor(nome: string, cargo: string, salario: number) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    descricao(): string {
        return `O nome do funcionário é ${this.nome}, trabalha no cargo ${this.cargo} e ganha ${this.salario}`;
    }
}

class Gerente extends Funcionario {
    
    constructor(nome: string, cargo: string, salario: number, public departamento: string) {
        super(nome, cargo, salario)
    }
   descricaoDetalhada(): string {
    return  `${super.descricao()}, no departamento ${this.departamento}`;
   }
}


const gerente = new Gerente('Nicolas', 'Analista de suporte', 5000, 'TI');

console.log(gerente.descricaoDetalhada());
