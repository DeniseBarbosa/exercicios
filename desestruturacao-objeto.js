const pessoa = {
    nome: "Jose",
    idade: 13,
    cidade: "Rio",
    profisao: "estudante"
}

// const nome = pessoa.nome;
// const idade = pessoa.idade;
 
// obs: nome, cidade, idade tem que esta igual ao objeto 
const {nome, idade, cidade} = pessoa;

console.log(nome,idade);

//pode acessar o restante da propriedade
//const {nome, idade, cidade ...outros} = pessoa;
//console.log(outros);


