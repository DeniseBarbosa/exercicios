const imprimirNome = (nome) =>{
    console.log(nome)
};

imprimirNome('Denise');

const imprimirDenise = () =>{
    console.log('Denise Pereira');
}
imprimirDenise();
setTimeout(imprimirDenise, 3000);