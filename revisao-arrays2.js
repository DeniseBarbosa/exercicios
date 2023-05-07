const imprimirNome = (nome) =>{
    console.log(nome);
}

//imprimirNome("Denise");

setTimeout(()=>{
    //console.log("Contagem regressiva")
}, 5000);

setInterval(() => {
    //console.log("Olá Denise")
}, 2000);

const frutas = ["maça", "abacaxi", "manga", "melancia"];
const resultado = frutas.every((elementoAtual)=>{
    return elementoAtual !== "banana";
});

//console.log(resultado);


const usuarios = [
    {nome: "denise", idade:20},
    {nome: "pedro", idade:18},
    {nome: "bia", idade:18}
];

const classificacaoIdade = (idades) =>{
    const resultado = idades.every((x)=>{
        return x.idade > 17
    })

    if (resultado) {
        console.log("Acesso liberado");
    }else{
        console.log("Acesso negado")
    }
};

//classificacaoIdade(usuarios);

//SOME
const nomes = ["jão", "jose", "maria", "julia"];
const resultados = nomes.some((nome)=>{
    return nome === "denise";
});


//console.log(resultados);


const arquivos = ["antivirus.yxy", "imagem.pgn", "doc.txt", "virus.bat"];

const antivirus = (analisar)=>{
    const virus = analisar.some((x)=>{
        const existeExtensao = x.indexOf(".bat");
        return existeExtensao !== -1;
        
    })
    if (virus) {
        console.log("Tem virus");
    }else{
        console.log("Não tem virus");
    }
    
};

//antivirus(arquivos);


const arquivos1 = ["img.jpg", "doc.txt", "buld.bat"];
const antiVirus = /\.tr$/.test(arquivos1);
if (antiVirus) {
    //console.log("Tem virus");
}else{
    //console.log("Não tem virus");
}

const carros = [
    {nomes: "corola", marca: "toyota", ano: "2021", cor: "preto"},
    {nomes: "argo", marca: "fiat", ano: "2022", cor: "branco"},
    {nomes: "ranger", marca: "ford", ano: "2018", cor: "cinza"},
    {nomes: "hilux", marca: "toyota", ano: "2017", cor: "azul"},
];

const buscarCarro = (marca, arrayCarros) =>{
    const resultado2 = arrayCarros.find((carro)=>{
        return carro.marca === marca;
    });

    console.log(resultado2);
};
//buscarCarro("toyota", carros);

const carros1 = [
    {nomes: "corola", marca: "toyota", ano: "2021", cor: "preto"},
    {nomes: "argo", marca: "fiat", ano: "2022", cor: "branco"},
    {nomes: "ranger", marca: "ford", ano: "2018", cor: "cinza"},
    {nomes: "hilux", marca: "toyota", ano: "2017", cor: "azul"},
];

const resultado3 = carros1.findIndex((carro)=>{
    return carro.nomes === "hilux";
});

//console.log(resultado3)

const numeros2 = [1,6,35,4,8,9,8,8];
const animais = ["peixe","gato","cahorro","cobra","cobra","cachorr"];

const resultadoNumeros = animais.filter((numeros)=>{
    //retorna um array vazio quando não acha
    return numeros === "cobra";
});
 //console.log(resultadoNumeros);

 const professores = [
    {nome: "guido", stack:"backend"},
    {nome: "maria", stack:"frontend"},
    {nome: "julio", stack:"frontend"},
    {nome: "cintia", stack:"backend"},
    {nome: "nando", stack:"backend"},
    {nome: "carlos", stack:"frontend"},
    {nome: "flavia", stack:"frontend"},
    {nome: "denise", stack:"backend"},
 ];

 const professoresBackend = professores.filter((professor)=>{
        return professor.stack === "backend";
 });

 const professoresFrontend= professores.filter((professor)=>{
    return professor.stack === "frontend";
});

// console.log(professoresBackend);
// console.log(professoresFrontend);


const usuarios3 = [
    {nome: "pedro", sobrenome: "matias", idade: 20},
    {nome: "marta", sobrenome: "pires", idade: 35},
    {nome: "celio", sobrenome: "cavalcante", idade: 18},
    {nome: "matheus", sobrenome: "silva", idade: 15},
    {nome: "julia", sobrenome: "augustas", idade: 55},
];

const novoArray = usuarios3.map((usuario)=>{
    return {nomeCompleto: `${usuario.nome} ${usuario.sobrenome}`, idade: usuario.idade}
});

//console.log(novoArray);

const produtos = [
    {nome: "arroz", preco: 80},
    {nome: "feijao", preco: 90},
    {nome: "macarrão", preco: 100},
];

const produtosComDesconto = produtos.map((produto)=>{
    const desconto = (produto.preco * 10)/100;
    const descontoJa = produto.preco - desconto;
    return {nome: produto.nome, preco: produto.preco, produtosComDesconto: `${descontoJa }`}
});

console.log(produtosComDesconto);