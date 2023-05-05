const pessoa = {
    nome: "Daniel",
    idade: 15,
    altura: 1.75,
    peso: 65
};

console.log(pessoa);
console.log( `Meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos`);




const pessoa1 ={
    nome: "Marcos",
    idade: 65,
    altura: 1.80,
    temCNH: true,
    apelidos: ["marquinhos ", " Marco", "Bill"]
}

let textoCNH = pessoa1.temCNH ? "possui CNH" :"não possui CNH" ;

console.log(`${pessoa1.nome} de ${pessoa1.idade} anos, tem ${pessoa1.altura} altura e ${textoCNH} e seus apelidos são `)
for(let apelido of pessoa1.apelidos){
    console.log(apelido);
}

const carro = {
    marca: "Toyota",
    modelo: "Etios",
    ano: 2023
}
const pessoa2 = {
    nome: "Augustos",
    idade: 25,
    carro: carro
};

console.log(pessoa2.carro.marca);


const produtosConsumidos = [
    {
        nome: "Cerveja",
        precoUnidade: 5,
        quantidade: 2
    },
    {
        nome: "Caipirinha",
        precoUnidade: 10,
        quantidade: 2
    }
];

const cliente ={
    nome: "Denise",
    idade: 20,
    produtosConsumidos
};
//vai acumular o total da compra
let totalApagar = 0;
 for(let produto of produtosConsumidos){
    totalApagar +=  produto.precoUnidade * produto.quantidade;
 }
console.log(`Valor total a pagar é ${totalApagar}`);




const desestruturacao = {
    nome: "Denise",
    idade: 25,
    altura: 1.70,
    profisao: "Desenvolvedora",
    cidade: "São Paulo",
    temPet: false,
    vacinaCovid: true
};

const{nome, idade, altura} = desestruturacao;

console.log(`Nome ${nome}, sua idade é ${idade}, altura ${altura}`);
console.log(desestruturacao.profisao);





const pessoaFisica = {
    nome: "Andreia",
    idade: 40,
    altura: 1.65,
    peso: 75
};
const endereco ={
    rua: "Iquiririm",
    bairro: "Vila Sonia",
    cep: 0220066,
    cidade: "SP"

}; 

const cadastroCidadao = {
    ...pessoaFisica,
    ...endereco,
    temPet: true
};

console.log(cadastroCidadao);

const palavras = ["casa","rua","vestido","loja","sandalia","borboleta","jiboia"];

const [a, b, c, ...resto] = palavras;
console.log(a,b,c, resto);








