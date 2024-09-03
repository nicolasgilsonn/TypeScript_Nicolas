class EmailInvalidoError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'EmailInvalidoError';
    }
}

function verificarEmail(email: string): void {
    if (email.includes('@')) {
        console.log(`E-mail válido!`)
    }
    console.log(`E-mail inválido`)
}

    try {
        verificarEmail('usuario.com');
    } catch (error) { 
        if (error instanceof EmailInvalidoError) {
        console.error(error.message); 
    }
}

