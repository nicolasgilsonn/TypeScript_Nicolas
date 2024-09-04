async function buscarDadosDaAPI(): Promise<string> {
    return new Promise((res, req) => {
        setTimeout(() =>  {
            const API = true;
            if (API) {
                res(`Dados adquiridos com sucesso!`)
            }
            else {
                req(`Não foi possível adquirir os dados.`)
            }}

            ,2000)

        } 
    )
}

async function executarBusca() {
    try {
        const dados = await buscarDadosDaAPI();
        console.log(dados);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

executarBusca(); 
