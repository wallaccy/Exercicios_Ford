onst cepValido = (cep) => cep.length == 8 && eNumero()
function eNumero() {
    return /^[0-9]+$/ //regex
}

//realizando consumo da nossa API viaCEP
// primeira forma:
// async function name(params) {
//}

const consumoApi = async() => {
    // chamar a função para limpar o formulario
    limparCampos()

    const cep = document.getElementById('cep').value
    const url = 'https://viacep.com.br/ws/${cep}/json/'

    //realizar o consumo
    if(cepValido(cep)) {
        // retorno do viaCEP
        const dados = await fetch(url) //await => aguardar dados
        console.log(dados);

        const endereco = await dados.json() //utilizar os dados que estão na variável dados e exibir na tela
        console.log(endereco);
    }

        //hasOwnProperty => retorna um booleano indicando se o objeto possui valores (propriedades)
        
        else{
        endereco.hasOwnProperty('erro') ? document.
        getElementById('endereco').value = 'CEP INCORRETO'
        }
}

document.getElementById('cep').addEventListener('focusout', consumoApi())