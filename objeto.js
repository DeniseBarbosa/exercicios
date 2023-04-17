const pessoa = {
    nome: "Denise",
    altura: 1.69,
    peso: 68

};

console.log(pessoa);

//acessando apenas uma propriedade
console.log(`Meu nome é ${pessoa.nome}`);
//ou pode fazer dessa maneira
console.log(pessoa.nome);
//voce tambem pode trocar o nome 
pessoa.nome = "Lucia";
console.log(`Meu nome é ${pessoa.nome}`);

//vamos usar todas as propriedades
console.log(`Meu nome é ${pessoa.nome}, a minha altura é ${pessoa.altura} e peso ${pessoa.peso} quilos `);


// outra forma de manipulação de objetos

pessoa['nome'] = "Marcos";
pessoa['altura'] = 1.89;
console.log(`Meu nome é ${pessoa.nome}, a minha altura é ${pessoa.altura} e peso ${pessoa.peso} quilos `);

