let listaMercado = ['macarão', 'feijão', 'arroz', 'leite', 'pão','queijo','maça','frango','ovos'];
const notasAluno = [5,10,8,3,1,7];
let variados = [['mar','lua','estrela'], 795, 52,30, [0, 1, "colher",20,80], "peixe", "parauapebas"];
let cidades = ["São Paulo", "Bahia", "Porto Alegre", "Brasilia"];
variados [2] = "coelho";
variados [4][4] = 0;
console.log(listaMercado[3]);
console.log(notasAluno[4]);
//vc conta a quantidade de caracter da palavra 
console.log(variados[4][2].slice(2));
console.log(variados);
console.log(variados[4]);

for ( let i = 0; i < cidades.length; i ++){
    console.log(cidades[i]);
}

for ( let i = 0; i < variados.length; i ++){
    console.log(variados[i]);
}