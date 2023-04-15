

const cor = ['branco','preto','azul','verde','rosa','lilas'];

for( let i = 0; i < cor.length; i++ ){
    //console.log(cor[i]);
}

//criando um array de 5 numero
const numeros = [0,6,5,4,8];
let i = 0;
//enquanto o i for menor que o tamanho do array
while (i < numeros.length) {
  //  console.log(numeros[i]);
    i++
}
//somar todos os numeros da lista
const somarNumeros = [1,2,3,4]; //tamanho 8
let soma = 0;
for(let i = 0; i < somarNumeros.length; i++){
    //será executado para i de 0 até 8
    soma = soma + somarNumeros[i];

}
console.log(soma);