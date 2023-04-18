function determinarFaixaEtaria(idade){
    if (idade <= 21) {
        return "Jovem";
    }else if( idade >= 22 && idade <=65){
        return "Adulto";
    }else{
        return "idoso";
    }
};

const pessoa = {
    nome: "Denise",
    idade: 23,
    altura: 1.70,
    profissao: "Desenvolvedora"
};

function apresentacao(pessoa) {
    return `Seu nome é ${pessoa.nome} é uma pessoa ${determinarFaixaEtaria(pessoa.idade)}, tem ${pessoa.altura} altura e é ${pessoa.profissao}`
};

console.log(apresentacao(pessoa));