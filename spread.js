//unir dois objetos 

const pessoa = {
    nome: "Fernando",
    idade: 25,
    cidade: "Parobe",
    proissao: "Modelo"
}
const endereco = {
    rua: "25 de março",
    numero: 256,
    bairro: "Liberdade"
}
//unir 
const unirObjetos = {
     ...pessoa,
     ...endereco,
     //esta adicionando uma nova coluna dentro desse objetos unidos 
     novoCampo : 300
}

console.log(unirObjetos);