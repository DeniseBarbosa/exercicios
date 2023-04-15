const palavra = 'Casa da arvoreaaaa';

let quantidade = 0;
for(let letra of palavra){
    if(letra === 'a'){
        quantidade++;
    }
}
console.log(quantidade);

for (let i = 10; i >= 0; i--){
   // console.log(i);
}

let numero = 2;
while( numero <= 10){
   // console.log(numero);
    numero = numero + 2;
}

for (let numeroPar = 2; numeroPar <=10; numeroPar = numeroPar + 2) {
   // console.log(numeroPar);
}