const produtoConsumido = [
    {
        nome: "caipirinha",
        quanditade: 1,
        preco: 30

    },
    {
        nome: "asa de franco",
        quanditade: 2,
        preco: 30

    },

]
let totalAPagar = 0;
for(let produto of produtoConsumido ){
    totalAPagar += produto.preco * produto.quanditade
}

const cartaoConsumo = {
    nomeCliente: "Denise",
    idadeCliente: 25,
    produtoConsumido
}
 
console.log(cartaoConsumo.nomeCliente);
console.log(cartaoConsumo.idadeCliente);
cartaoConsumo.idadeCliente = 30;
console.log(cartaoConsumo.idadeCliente);
console.log(cartaoConsumo.produtoConsumido[0]);
console.log(cartaoConsumo.produtoConsumido[0].nome);
console.log(cartaoConsumo.produtoConsumido[1].preco);
console.log(cartaoConsumo.produtoConsumido[produtoConsumido.length - 1].preco);
const totalFormatado = (totalAPagar/100).toFixed(2);
console.log(`Valor total a paar ${cartaoConsumo.nomeCliente} total a pagar ${ totalAPagar}`);


