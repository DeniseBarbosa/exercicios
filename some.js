//vai validar pelo o menos um elemento
const nomes = ["joao","maria","jose","rodrigo"];
const numeros = [1,3,5,7,2]

const resultado = nomes.some((nome)=>{
    return nome === "beth";

});

console.log(resultado);

const resultado1 = numeros.some((par)=>{
    return par % 2 == 0;
});

console.log(resultado1);


const arquivos = [".txt",".exe",".bat"];

const antiVirus = (arrayArquivos)=>{
    const resultado3 =  arrayArquivos.some((arquivo)=>{
        const existeExtensao = arquivo.indexOf(".bat");
        return existeExtensao !== -1;
    });
    if (resultado3) {
        console.log("viruss detectado");
    }else{
        console.log("nenhum virus detectado");
    }
};

antiVirus(arquivos);


