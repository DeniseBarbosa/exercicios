const numeros = [1,2,3,4,5];

const resultado = numeros.reverse();
//console.log(resultado);

// function inverterString(texto) {
//  const arrayDeLetras =   texto.split("");
//  arrayDeLetras.reverse();
//  let textoInvertido = "";
//  for (let letra of arrayDeLetras){
//         textoInvertido += letra;
//  }
//     console.log(textoInvertido)
// }
// inverterString("O gatinho foi atrás do rato");


function inverterString(texto) {
    const arrayDeLetras =   texto.split("");
    arrayDeLetras.reverse();
    const textoInvertido = arrayDeLetras.join("");
    console.log(textoInvertido);
   }
   inverterString("O gatinho foi atrás do rato");