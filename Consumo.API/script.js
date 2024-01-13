//função para pesquisar cep - OK
//função para limpar o formulário - OK
//função para preencher o formulário - OK
//validação se o cep contém apenas números - OK
//validar se o CEP tem o comprimento de 8 caracteres - OK


function limparCampos() {
    document.getElementById('endereco').value = "";
    document.getElementById('numero').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('estado').value = "";
}

function preencherForm(endereco) {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

const cepValido = (cep) => cep.length == 8 && eNumero(cep)

function eNumero(numero) {
    return /^[0-9]+$/.test(numero)  //regex
}

//realizando o consumo da nossa API viaCEP
//primeira forma:
// async function name(params) {
    
// }
//segunda forma
const consumoApi = async () => {

    //chamar a função para limpar o formulário 
    limparCampos()

    const cep = document.getElementById('cep').value
    console.log(cep);

    const url = `https://viacep.com.br/ws/${cep}/json/`

    //realizar o consumo
    if (cepValido(cep)) {
        //precisamos ter o retorno do viaCEP

        const dados = await fetch(url) //await => aguardar os dados
        console.log(dados);

        const endereco = await dados.json() //utilizar os dados que estão sendo guardados na variável dados e exibir na tela
        console.log(endereco);

        //hasOwnProperty => retorna um booleano indicando se o objeto possui valores (propriedades)
        endereco.hasOwnProperty('erro') ? document.getElementById('endereco').value = "O CEP não foi encontrado" : preencherForm(endereco);
    }
    else  {
        document.getElementById('endereco').value = "CEP Incorreto!!"
    }

}

document.getElementById('cep').addEventListener('focusout', consumoApi)
// justify content flexbox 
// footer: section form placeholder textarea