// criar uma função que imprima na tela ola 
// function cumprimentar(pessoa, idade){
   
//       console.log(`ola, ${pessoa} sua idade é ${idade}`);
// };

// cumprimentar("Denise", 25);
// cumprimentar("Pedro", 50);

const pessoaDados = {
    nome: "Pedro",
    idade: 25,
    altura: 1.75,
    profisao: "padeiro"
};

                      //aqui não precisa necessariamente o mesmo nome do objeto, pode ser igual ou não
function apresentacao (pessoaDados){
    console.log(`Olá! meu nome é ${ pessoaDados.nome}, sou um jovem de ${pessoaDados.idade} anos, tenho ${pessoaDados.altura} altura
     e sou ${pessoaDados.profisao}
    `);
};

apresentacao(pessoaDados);






