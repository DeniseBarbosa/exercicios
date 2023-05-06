const frase = "Estou aprendendo a ser uma desenvolvedora de software"
console.log(frase.includes("software", 5));

const email = "deniseluvoir@gmail.com";

const temArroba = email.indexOf("@");
const temPonto = email.indexOf(".", temArroba);

if (temPonto > temArroba) {
    console.log("Email atende as requisições, ou seja, e-mail valido");
}else{
    console.log("Não tem nenhum ponto apos o @, e-mail invalido");
}

const cidade = "Rio de Janeiro - RJ";
const digito = cidade.slice(cidade.length -2);
console.log(digito);

let substituirPalavras = "Eu odeio doguinhos e odeio gatinhos, tambem odeio melancia, odeio odeio ";
let substitui = substituirPalavras;
while (substitui !== substituirPalavras.replace(/odeio/g, "amo")) {
    substitui = substitui.replace(/odeio/g, "amo");
}

console.log(substitui);


