function encontrarMaiorElemento<T>(array: T[]): T {
    let elemento = array[0]
    for (let i = 0; i < array.length; i++) {
        if (elemento < array[i]) {

        
        elemento = array[i]
        
       }
    }
    return elemento;
}


const maiorNumero = encontrarMaiorElemento([1454534, 73427382, 8734, 783478238, 793473]);
const maiorPalavra = encontrarMaiorElemento(['gato', 'elefante', 'zebra', 'cachorro', 'gavião'])

console.log(maiorNumero)
console.log(maiorPalavra)
