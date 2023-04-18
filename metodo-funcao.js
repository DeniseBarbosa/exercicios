
const pessoa = {
    nome: "Denise",
    idade: 50,
    altura: 1.70,
    profissao: "Desenvolvedora",
    apresentacao: function  () {
        return `Seu nome é ${this.nome} é uma pessoa ${this.determinarFaixaEtaria(this.idade)}, tem ${this.altura} altura e é ${this.profissao}`

    },
    determinarFaixaEtaria: function  ( ) {
        if (this.idade <= 21) {
            return "Jovem";
        }else if(this.idade >= 22 && this.idade <=65){
            return "Adulto";
        }else{
            return "idoso";
        }
    }
    
};


console.log(pessoa.apresentacao());
console.log("Oi");
 