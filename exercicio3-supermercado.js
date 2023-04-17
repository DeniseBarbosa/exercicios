const comprasMercado = [
    {
        nomeProduto: "Pão de creme",
        quantidade: 3,
        precoUnidade: 3
    },

    {
    
        nomeProduto: "Cafe Nestle",
        quantidade: 1,
        precoUnidade: 6
    }

];
let totalAPagar = 0;
for(let listaProdutos of comprasMercado){
    totalAPagar = totalAPagar + listaProdutos.precoUnidade * listaProdutos.quantidade
};
//const totalFormatado = (totalAPagar/100).toFixed(2);
console.log(totalFormatado);