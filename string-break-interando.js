const palavra = 'Alemanha';
let encontrado = false;
// 1° percorrer a palavra como se fosse um array
for (let letra of palavra) {
     //se a letra tem H imprima
    if (letra === 'h') {
        console.log('Tem a letra h');
        encontrado = true;
        //encerre quando encontrar
        break;
    }
}
//se não encontrado imprima
if (!encontrado) {
    console.log("Não tem h");
}