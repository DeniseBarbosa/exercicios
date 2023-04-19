const frase = "Eu estou aprendendo como se usa o metodo include";


console.log(frase.includes("aprendendo", 3));

// validando um e-mail 
// tem que ter um @
//tem que ter pelo o menos um ponto depois do @
const possivelEmail = "denise@gmail.com";

const indexArroba = possivelEmail.indexOf("@");
const indexPontoAposArroba = possivelEmail.indexOf(".", indexArroba);

if (indexPontoAposArroba > indexArroba) {
    console.log("Email atende as requisições");
}else{
 console.log("Não há nenhum ponto apos o arroba");
};


//Slice
//quero obter apenas os dois dígitos
//do estado de uma cidade
const cidade = "São Paulo - RJ";

const digito = cidade.length -2 ;
let pegarUltimoDigito = cidade.slice(digito);
console.log(pegarUltimoDigito);

//trocar uma string por outro
const numero = "97.50";
const variavelAlterada = numero.replace(".", ",");
console.log(variavelAlterada);

const pet = "O meu pet é um gatinho";
const alterarNome = pet.replace("gatinho","catioro");
console.log(alterarNome);


function trocarTudo (textoOriginal, texto, novoTexto){
    while( textoOriginal !== textoOriginal.replace(texto,novoTexto)){
            textoOriginal = textoOriginal.replace(texto,novoTexto);
    }

    return textoOriginal;
}

let original = "12.36.956.";
console.log(trocarTudo(original, ".", ","));


function imprimirData( dia, mes, ano){
    //duas opçoes de se trasnformar number em string
     const diaFormatado = String(dia).padStart(2, "0");
     const mesFormatado = `${mes}`.padStart(2, "0");
     console.log(`${diaFormatado}/${mesFormatado}/${ano}`);
}

imprimirData(1,1,2023);

//trasnformar "denise pereira barbosa
// para "Denise Pereira Barbosa"

const nome = "denise pereira barbosa";
const arrayNomes = nome.split(" ");
console.log(arrayNomes);
let nomeFormatado = " ";
for (let nome of arrayNomes){
    //trasnformar a inicial de cada nome em maiuscula
    let primeiraLetra = nome.slice(0, 1);
    let restanteNome = nome.slice(1);
   nomeFormatado = nomeFormatado + primeiraLetra.toUpperCase() + restanteNome + " ";
  

}
console.log(nomeFormatado.trim());