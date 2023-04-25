const usuario = [
    {nome: "luana", sobrenome:"silva", idade: 30},
    {nome: "fernanda", sobrenome:"castanho", idade: 15},
    {nome: "joao", sobrenome:"inacio", idade: 20},

];

const novoArray = usuario.map((usuario)=>{
    return { 
     nomeCompleto: `${usuario.nome} ${usuario.sobrenome}`,
     idade: usuario.idade}
});

console.log(novoArray);


const produtos  = [
    {nome: "arroz", preco: 500},
    {nome: "carne", preco: 3200},
    {nome: "biscoito", preco: 450},
    {nome: "banana", preco: 3200},
];

const produtosDescontos = produtos.map((produto)=>{
    return{
        nome: produto.nome,
        preco: produto.preco,
        desconto: produto.preco * 0.1
    }
});

console.log(produtosDescontos);