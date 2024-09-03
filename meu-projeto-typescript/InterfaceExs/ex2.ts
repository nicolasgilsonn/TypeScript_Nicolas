type Pessoa = {
    nome: String;
    idade: number;
}

type Empregado = {
    empresa: String;
    salario: number;
}

type Empregadu = Pessoa & Empregado;


function Funcionarios(funcionario: Empregadu): String {
    return `O nome do funcionário é ${funcionario.nome}, tem ${funcionario.idade} anos, trabalha na empresa ${funcionario.empresa} e ganha ${funcionario.salario}`
}

const pessoa1: Empregadu = {
    nome: 'Nicolas',
    salario: 5000,
    idade: 25,
    empresa: 'IBM'
}

console.log(Funcionarios(pessoa1))