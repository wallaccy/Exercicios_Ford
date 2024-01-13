//array em js é heterogenio, ou seja, podemos colocar qualquer coisa, string
//      indice = 0     1    2   3
const valores = [18.0, 80, 43, 1.8888]

//var(array) definindo um indice 10 e atribuindo o valor de 967 para o array
valores[10] = 967 // --> incluindo o indice 10 no array

console.log(`
${valores[0]}
${valores[3].toFixed(2)}
${valores[10]}
${valores}
${valores.length}
`);

// *********** Implementar métodos de Array *******

// 1-PUSH >>
const pushArray = [`"girafa", "hipopótamo", "camaleão", "tartaruga"`]

console.log(pushArray)

//array.método()
pushArray.push("escorpião") //insere o animal no final do array 
console.log(pushArray);
pushArray.unshift("cachorro") //insere o animal no início do array
console.log(pushArray)

// 2-POP >>
//Remove um item do final do array

const popArray = ["andre", "luis", "fernanda", "mariana"]
console.log(popArray);

popArray.pop()

console.log(popArray);

popArray.shift() //remove o primeiro item do array

console.log(popArray);

// 3-delete frutas

const frutas = ["banana", "maçã", "atemoia", "tomate"]

delete frutas [1]

console.log(frutas);

frutas.splice(1, 1, "teste");

console.log(frutas);

// 4-filtrar  serve para utilizar a filtragem dentro do array > ex: numeros de 1 a 10
// 

//                      0   1   2  3  4   5
const filterNumber = [1, 50, 65, 2, 5, 100]

console.log(filterNumber);

const numeroMenor10 = filterNumber.filter((numerosArray) => {

    //bloco de código - lógica. numerosArray vai auxiliar para ler os dados
    return numerosArray < 10
})

    console.log(numeroMenor10);


// 5-map
// mofifica o array existente > cria um novo array moficado
//                 0  1  2  3  4  5

const arrayMap = [1, 2, 3, 4, 5, 6]
//modificação do array

const arrayModificado = arrayMap.map((ajudante)=> {
    // começar o bloco de codigo

    return ajudante * 2
})
console.log(arrayMap);
console.log(arrayModificado);

// 6-foreach
// repete as informações de todo o array


const arrayString = ["carlos", "andre", "julia", "akira"]

arrayString.forEach((elements)=>{

    console.log(elements);
})

// 7-sort
//crie um array de nomes e organize em ordem alfabética

const arraynames = ["Ingrid", "Juliana", "Thiago"]

console.log (arraynames);

arraynames.sort ()

console.log (arraynames);

//sort com numeros
const numerosarray = [40,89,10,30,12,10000]

numerosarray.sort()

console.log(numerosarray)

// 8-reduce

//**********Exercicio**********

const nomearray = ["Ingrid", "Juliana","Guilherme","Thiago","Arthur"]
nomearray.sort()
cons

// ctrl d seleciona todos os elementos iguais 