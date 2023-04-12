const valorDacompra = 100;
const numeroDeParcelas = 12;
const desconto = valorDacompra * (10 /100);
const valorTotalAPagar = valorDacompra - desconto;
const PagamentoParcelado = valorDacompra / numeroDeParcelas;


if ( numeroDeParcelas === 1) {
    console.log(`O seu pagamento foi avista e você ganhou ${desconto}% de desconto`);
    console.log(`Valor total a pagar ${valorTotalAPagar} reais`);
}else if ( numeroDeParcelas >= 2 && numeroDeParcelas <= 6){

    console.log(`Parcelado em ${numeroDeParcelas} Valor a pagar R$${PagamentoParcelado.toFixed(2)}`);
}else if( numeroDeParcelas >= 7 && numeroDeParcelas <= 12){
    //parcelas com juros
    const valorApagarComJuros = (valorDacompra * (1+1/100)**numeroDeParcelas).toFixed(2);
    const valorDaparcela = (valorApagarComJuros / numeroDeParcelas).toFixed(2);
    console.log(valorDaparcela);
}else{
    console.log("Numero de parcelas não permitido");
}