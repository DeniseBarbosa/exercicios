const pessoa = {
    nome: "pedro",
    altura: 1.86,
    peso: 60,
    //carro -> marca, modelo, ano, potencia
    carro: {
        marca: "Toyota",
        modelo: "Etios",
        ano: 2020,
        potencia: 80
    }
}

//console.log(pessoa.carro);
//imprimindo so a marca do carro
//console.log(pessoa.carro.marca);

//pode ser escrito dessa maneira tambem 

const carro = {
    marca: "Toyota",
    modelo: "Etios",
    ano: 2020,
    potencia: 80
}
const minhaAltura = 1.86;
const peso = 60
const pessoa1 = {
    nome: "pedro",
    altura: minhaAltura,
    peso: peso,
    //carro -> marca, modelo, ano, potencia
    carro:  carro
}
 //console.log(pessoa1.peso);

 // outra forma de fazer 
const gato = {
    raca: "gatinho de rua",
    situacao: "já foi adotado"
};
 const pet = {
    nome : "lulu",
    cor: "cinza",
    idade: 2,
    gato
    
 }

console.log(pet);