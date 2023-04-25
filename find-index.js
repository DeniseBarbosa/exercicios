const carros = [
    {nome: "corola", marca: "toyota", ano: 2020, cor: "prata"},
    {nome: "argo", marca: "fiat", ano: 2021, cor: "preto"},
];

const resultados = carros.findIndex((carro)=>{
   return carro.nome === "argo";
});

console.log(resultados);

const nomes = ["ana", "rodrigo", "fabio"];

const resultado = nomes.findIndex((nome)=>{
    return nome === "ana";
 });

 console.log(resultado);

 const numeros  = [1,2,3,4];
 const resultado1 = numeros.findIndex((numero)=>{
    return numero === 4;
 });

 console.log(resultado1);