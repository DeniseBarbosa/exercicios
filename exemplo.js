// tem o ingresso e é maior que 18 pode entrar
// tem o ingresso e é menor ou igual a 16 anos, não pode entrar

const temIngresso = true;
const censura = 16;
const idade = 16;
if (temIngresso === true && idade >= censura) {
    console.log("Pode entrar");
}else if (temIngresso === true && idade <= censura) {
    console.log("Não pode entrar");
} else {
    console.log("Adiquire o seu ingresso");
}
