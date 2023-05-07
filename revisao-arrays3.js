const numeros = [1,50,2,3,6,7,95];

numeros.sort((a, b)=>{
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }

    return 0;
});
console.log(numeros);

const numeros1 = [1, 50, 2, 3, 6, 7, 95];

numeros1.sort((a, b) =>
    a - b
);

console.log(numeros1);


const usuarios = [
    {id: 1, nome: "junior", idade:23},
    {id: 3, nome: "maia", idade:52},
    {id: 10, nome: "carlos", idade:15},
    {id: 12, nome: "rafa", idade:25},
    {id: 5, nome: "cintia", idade:33},
];

const ordenando = usuarios.sort((a, b )=>{
    return a.id - b.id;
     
});

console.log(ordenando);

const pessoas = ["joao", "ana", "carlos","felipe","bia", "arthur"];

pessoas.sort((a, b)=>{
    return a.localeCompare(b);
});

console.log(pessoas);

const carros = [
    {nome:"aorola", marca:"toyota", ano:"2020", cor:"prata"},
    {nome:"cargo", marca:"fiat", ano:"2021", cor:"branco"},
    {nome:"ranger", marca:"ford", ano:"2020", cor:"azul"},
    {nome:"busca", marca:"fiat", ano:"2018", cor:"branco"},
    {nome:"hiluz", marca:"toyota", ano:"2005", cor:"prata"},
];

const ordenarCarros = (arrayCarros, campoOrdenacao)=>{
    arrayCarros.sort((primeiro, segundo)=>{
        return primeiro[campoOrdenacao].localeCompare(segundo[campoOrdenacao]);
    });

    console.log(arrayCarros);
};

ordenarCarros(carros, "nome");

const arrays = [1,2,3,4,5];
let contador = 0;

for (let i = 0; i < arrays.length; i++) {
    contador = contador + arrays[i];
    
}
console.log(contador);

let somaTotal = arrays.reduce((contador, elementoAtual)=>
     contador + elementoAtual
);
console.log(somaTotal);