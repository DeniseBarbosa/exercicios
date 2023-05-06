function imprimaOla( ) {
    console.log("Ola")
};

imprimaOla();

//usando parametro
function cumprimentadoAlguem(nome, idade) {
    console.log(`Ola ${nome} voce tem ${idade} anos?`)
};

cumprimentadoAlguem("Denise", 20);
cumprimentadoAlguem("Pedro",30);

function apresentacao(nome, idade, altura, estudante = false) {
    let status = "";
    if (estudante) {
        status = "eu sou estudante";
    }else{
        status = "não sou estudante";
    }
console.log(`Olá meu nome é ${nome}, tenho ${idade} anos, tenho ${altura} de altura e ${status}
`)
}

apresentacao("Denise", 27, 1.75);
apresentacao("Pedro", 20, 1.75, true);

const descriaoObjeto = {
    nome: "Felipe",
    idade: 15,
    cidade: "São Paulo",
    eEstudante: false
};

function apresentacaoReuniao(pessoa) {
    let status = "";
    if (descriaoObjeto.eEstudante) {
        status = "eu sou estudante";
    }else{
        status = "eu não sou estudante";
    }
console.log(`Olá eu me chamo ${pessoa.nome} tenho ${pessoa.idade} anos, moro na cidade de ${pessoa.cidade} e ${status}`);
}

apresentacaoReuniao(descriaoObjeto);


function verificarMaiorDeIdade(idade) {
    if (idade >= 18) {
        return "é maior de idade";
    }else{
        return "é menor de idade";
    }
}

const status1 =  verificarMaiorDeIdade(15);
console.log(status1);


function faixaEtaria(idade) {
    if (idade <= 21) {
        return "Jovem";
    }else if( idade >= 22 && idade <= 65){
        return "Adulto";
    }else if(idade >= 66){
        return "Idoso";
    }
}

let verificacao = faixaEtaria(70);
console.log(verificacao);




const pessoaFisica = {
    nome: "Joao",
    idade: 30,
    cidade: "SP"
};

function verificarFaixaEtaria(idade ) {
    
    if (idade < 25) {
        return "jovem"
    }else{
        return  "não é jovem"
    }
}

function apresentacao1(pessoa3) {
    const faixaEtariaFisica = verificarFaixaEtaria(pessoa3.idade);
    console.log(`Nome ${pessoaFisica.nome} é ${faixaEtariaFisica} mora em ${pessoaFisica.cidade}`);
    
}

apresentacao1(pessoaFisica);

//Metdo 

const pessoaFisica1 = {
    nome: "Luana",
    idade: 20,
    cidade: "RJ",
    apresentacao2: function  ( ) {
    const faixaEtariaFisica = this.verificarFaixaEtaria1(this.idade);
    console.log(`Nome ${this.nome} é ${faixaEtariaFisica} mora em ${this.cidade}`);
    },
    verificarFaixaEtaria1: function  ( ) {
        if (this.idade < 25) {
            return "jovem"
        }else{
            return  "não é jovem"
        }
    }
};

pessoaFisica1.apresentacao2();
 