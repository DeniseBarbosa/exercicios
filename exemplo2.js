// tem que ter o ingresso
// tem que ser maior de idade ou igual a censura, ou está com os pais

const ingresso = true;
const censura = 16;
const idade = 15;
const estaComOsPais = false;

if (ingresso) {
    if (idade >= censura || estaComOsPais) {
        console.log("Pode entrar");
    }else{
        console.log("Precisa está acompanhado dos pais");
    }
}else{
    console.log("Precisa comprar o ingresso")
}