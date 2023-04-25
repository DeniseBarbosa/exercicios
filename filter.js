const numeros = [1,2,3,4,5,6,5,6,2,1,1,1];

const resultado = numeros.filter((numero)=>{
    return numero === 1;
});

console.log(resultado);
console.log(numeros);

const nomes = ["joao","maria","maria","pedro"];

const resultado1 = nomes.filter((nome)=>{
    return nome === "maria";
});

console.log(resultado1);

const professores = [
    {nome: "pedro", stack: "backend"},
    {nome: "flavia", stack: "backend"},
    {nome: "jonas", stack: "backend"},
    {nome: "tiago", stack: "frontend"},
    {nome: "ana", stack: "frontend"},
];

const professoresBackend = professores.filter((professor)=>{
     return professor.stack === "backend";
});

console.log(professoresBackend)

const professoresFrontEnd= professores.filter((professor)=>{
    return professor.stack === "frontend";
});

console.log(professoresFrontEnd)