//arrays de objetos 
const usuarios = [
    {nome: "joao", idade: 30},
    {nome: "maria", idade: 25},
    {nome: "fernanda", idade: 18},
    {nome: "pedro", idade: 29},
];

const resultado = usuarios.find((usuario)=>{
    return usuario.nome ==="joao";
});

console.log(resultado);


const nomes = ["pedro","mirela"];

const resultado1 = nomes.find((nome)=>{
    return nome ==="lua";
});

console.log(resultado1);


const carros = [
    {nome: "corola", marca: "toyota", ano: 2020, cor: "prata"},
    {nome: "argo", marca: "fiat", ano: 2021, cor: "preto"},
];

const buscarCarro = (marca, arrayCarros) =>{
    const resultado2  = arrayCarros.find((carro)=>{
        return carro.marca === marca;
    });

    console.log(resultado2);
}

buscarCarro("fiat", carros);


