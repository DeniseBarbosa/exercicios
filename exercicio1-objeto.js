const pessoa = {
    nome: "Denise",
    idade: 25,
    altura: 1.69,
    temCNH: false,
    apelidos: ["De", "Dede", "D."]
};

let textoCNH = "";
// pode ser escrito sem o  === true, vai depender do gosto
if (pessoa.temCNH === true) {
    textoCNH = "Possui CNH";
}else{
    textoCNH ="Não possui CNH";
}

//const textoCNH = pessoa.temCNH ? "possui CNH" : "Não possui CNH";

console.log(`${pessoa.nome} tem ${pessoa.idade} ${pessoa.altura} altura, ${textoCNH}, seu apelido é ${pessoa.apelidos[2]}, ${pessoa.apelidos[1]}`);

//melhorando o codigo a cima, veja que para imprimir os tres apelidos eu vou precisar chamar um por um.
// agora para eu imprimir os apelidos de forma dinamica, ou seja, eu preciso mudar apenas a quantidade dentro do objeto eu preciso fazer um for 
console.log(`${pessoa.nome} tem ${pessoa.idade} ${pessoa.altura} altura, ${textoCNH}, seu apelidos é  `);
for ( let apelido of pessoa.apelidos) {
    console.log(`${apelido}`);
    
};




// usando o ternario no bloco if para melhorar o codigo



