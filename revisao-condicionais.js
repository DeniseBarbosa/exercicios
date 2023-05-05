const eMaior = 25 > 16;
console.log(eMaior);

const x = 8;
let comparacao = x <= 16;
console.log(comparacao);

const y = 1;
const a = 2;
const comparacao1 = y >= a ;
console.log(comparacao1);

const eIgual = 1 == 18;
console.log(eIgual);
 const diferente = 15 != 1;
 console.log(diferente);

const identico = 15 === 15;
console.log(identico);
const identico1 = "casa" === "oi";
//casa não é identico que oi > verdadeiro
const identico2 = "casa" !== "oi";
console.log(identico2);


const idade = 66;

if( idade < 18){
    console.log("Menor de idade");
}else if (idade <= 65 ){
    console.log("Adulto")
}else{
    console.log("idoso")
}



let temIgresso = false;
const censura = 15;
let idadeCliente = 10;
let estaComOsPais = true;

if(temIgresso){
    if (idadeCliente >= censura || estaComOsPais) {
        console.log("Pode entrar");
    }else{
        console.log("Não pode entrar");
    }
}else{
    console.log("Não pode entrar");
}

let temCnh = false;

if (!temCnh) {
    console.log("Tem CNH");
} else {
    console.log("Não tem CNH")
}




const saldo = 1;

const unidade = ( saldo === 1 ? "real" : "reais");
console.log(`Você tem ${saldo} ${unidade}`);

let valorCompra = 100;
let numeroDeParcelas = 12;

if( numeroDeParcelas === 1){
    const desconto = valorCompra*(10/100);
    const total = valorCompra - desconto;
    console.log(`Compra feita à vista desconto de 10% valor total R$${total} `)
    
}else if (numeroDeParcelas >= 2 &&  numeroDeParcelas <= 6){
    const valorParcelas = (valorCompra / numeroDeParcelas).toFixed(2);
    console.log(`A compra foi parcelada em ${numeroDeParcelas} vezes, valor da parcela R$${valorParcelas}`);
}else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
    const valorApagarComJuros =  (valorCompra * (1+1/100) ** numeroDeParcelas).toFixed(2);
    const valorParcela =  (valorApagarComJuros / numeroDeParcelas).toFixed(2);
       console.log(`Compra parcelada em ${numeroDeParcelas} vezes, compras parceladas entre 7 e 12 tem um acrescim de 1% valor total R$${valorApagarComJuros}`);
}else{
    console.log("Numero de parcelas não permitido");
}