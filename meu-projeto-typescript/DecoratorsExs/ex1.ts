function medirTempo(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const met = descriptor.value;
    
    descriptor.value = function (...args: any[]) {
        console.time(propertyKey);  
        const resultado = met.apply(this, args);  
        console.timeEnd(propertyKey);  
        return resultado;
    };
    
    return descriptor;
}

class Calculadora {
    @medirTempo
    somarNumeros(array: number[]): number {
        return array.reduce((a, b) => a + b, 0);
    }
}


const calc = new Calculadora();
calc.somarNumeros([1, 2, 3, 4, 5]); 