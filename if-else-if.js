// menor de 18 -> menor de idade 
// maior de idade, mas menor ou igual a 65 -> adulto
// acima de 65 -> idoso
const idade = 65;
if (idade < 18) {
    console.log("É menor de idade");
}else if (idade <= 65) {
    console.log("É maior de idade");
} else {
    console.log("idoso");
}