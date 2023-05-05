//ordenação crescente
const numeros = [1,30,4,5,50,20,21,3,6];

numeros.sort((primeiroElemento, segundoElemento)=>{
    // if (primeiroElemento < segundoElemento) {
    //     return -1;
    // }

    // if (segundoElemento > primeiroElemento) {
    //     return 1;
    // }
    // return 0;
    return primeiroElemento - segundoElemento
});
//se não passar nenhum call back ele usa a tabbele one code
console.log(numeros)

//ordem decrescente
const numero1 = [1,2,3,4,5,6];

numero1.sort((a, b)=>{
    // if (a < b) {
    //     return 1;
    // }

    // if (a > b) {
    //     return -1;
    // }
    // return 0;

    return b - a ;
});

console.log(numero1);

const usuarios = [
    {id: 11, nome: "joao", idade: 23},
    {id: 1, nome: "pedro", idade: 19},
    {id: 20, nome: "juca", idade: 35},
    {id: 4, nome: "julia", idade: 20},
    {id: 10, nome: "maria", idade: 60}
];

console.log(usuarios);

usuarios.sort((primeiro, segundo)=>{
    return primeiro.id - segundo.id;
});

console.log(usuarios);



usuarios.sort((primeiro, segundo)=>{
    return segundo.id - primeiro.id;
});

console.log(usuarios);


const pessoas = ["João", "ana","Anacarla", "carlos", "Beatriz"];

//ordenação crescente
pessoas.sort((a, b)=>{
    return a.localeCompare( b);
});



console.log(pessoas);

const pessoas1 = ["João", "ana","Anacarla", "carlos", "Beatriz"];

//ordenação crescente
pessoas1.sort((a, b)=>{
    return b.localeCompare( a);
});



console.log(pessoas1);

const carros = [
    {nome: "corola", marca: "toyota", ano: "2020", cor: "prata"},
    {nome: "argo", marca: "fiat", ano: "2021", cor: "preto"},
    {nome: "ranger", marca: "ford", ano: "2023", cor: "azul"},
    {nome: "hilux", marca: "toyota", ano: "2018", cor: "branco"},
];

const ordenarCarros = (arrayCarros, campoOrdenacao) =>{
    arrayCarros.sort((a, b)=>{
        return a[campoOrdenacao].localeCompare(b[campoOrdenacao]);
    });

    console.log(arrayCarros);
};

ordenarCarros(carros, "marca");

//somando todo os elementos (numeros) de um array
const array = [0,1,2,3,4];

const valorReduce = array.reduce((acumulador, elementoAtual, indice, array)=>{
    return acumulador + elementoAtual;
});
console.log(valorReduce);

const array1 = [
    [2,3],
    [0,4,5],
    [1,3,2,6,]
];

const arrayReduzido = array1.reduce((acumulador1, elementoAtual1, indice1, array1)=>{
    acumulador1 = [...acumulador1, ...elementoAtual1];
    return acumulador1;
}, []);

console.log(arrayReduzido);

const usuarios1 = [
    {id: 1, nome: "joao", idade: 23},
    {id: 12, nome: "pedro", idade: 50},
    {id: 15, nome: "miguel", idade: 30},
    {id: 21, nome: "luana", idade: 19},
    {id: 3, nome: "maria", idade: 7},
];

const maiorIdade = usuarios1.reduce((acumulador2,elementoAtual2)=>{
    let maior =  acumulador2;
    if (elementoAtual2.idade > maior.idade) {
        maior = elementoAtual2;
    }

    return maior;
});

console.log(maiorIdade);