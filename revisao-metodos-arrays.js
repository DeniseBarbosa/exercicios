const numeros = [1,2,3,4];
const resultado = numeros.reverse();
console.log(resultado);


function inverterString(texto) {
   const quebrarLetras = texto.split("");
   quebrarLetras.reverse();

   const textoInvertido = quebrarLetras.join("");
   console.log(textoInvertido);
}

inverterString("Casa da colina");