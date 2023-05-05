const nomes = ["jose", "joao","maria","andre"];
//coloca no final do array
nomes.push("felipe");
//exclui o ultimo array
nomes.pop()
//remover o primeiro elemento
nomes.shift()
//adicionar um elemento no começo do array
nomes.unshift("Clark")
console.log(nomes);

const paises = ["Brasil", "Peru","Alemanha","Costa Rica", "EUA"];
paises.push("Marrocos");
paises.pop();
paises.unshift("Inglaterra");
paises.shift();

console.log(paises);
console.log(paises[paises.length -1]);
console.log(paises[1]);
console.log(paises[2]);


const frutas = ["maça","uva","melancia","pera","pessego"];

for( let i = 0; i < frutas.length; i ++ ){
    console.log(frutas[i]);
}


const numeros = [12,2,3,52,10];

for(let y = 0; y < numeros.length; y ++){
    console.log(numeros[y]);
}


const soma = [1,2,3];
let somaTotal = 0;

for(let i = 0; i < soma.length; i ++){
    somaTotal = somaTotal + soma[i];
}

console.log(somaTotal);


const animais = ["gato", "cachorro"," panda", "peixe"];

for (let animal of animais){
    console.log(animal);
}


const textos = "Alemahna";

let encontrou = false;

for (let texto of textos ){
    if (texto === "h") {
        console.log("Tem a letra H")
        encontrou = true;
        break;
    }
}

if (!encontrou) {
    console.log("Não tem letra H");
}

const encontrar = "piracicaba";
let contador = 0;
for( let encontra of encontrar){
    if (encontra === "a" ) {
        contador++
    }
}

console.log(contador);

for(let i = 10; i >= 0; i--){
    console.log(i);
}


let numero1 = 2;

while( numero1 <=50){
    console.log(numero1);
    numero1 = numero1 + 2;
}












