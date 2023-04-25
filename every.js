const frutas = ["abacaxi","manga","melancia"];
const numeros = [1,5,2,3,4,4];

const resultado = frutas.every((frutaQueNTem) => {
    return frutaQueNTem !== "manga";
});

console.log(resultado);

const resultado1 = numeros.every((numero) =>{
    return numero < 6
})

console.log(resultado1);

//array de objetos
const usuarios = [
    { nome: "pedro", idade: 30},
    { nome: "maria", idade: 17},
    {nome: "marcos", idade: 20},
    {nome: "felipe", idade: 12},
];

const fiscalizarFesta = (arrayObjetos) =>{
    const resultado = arrayObjetos.every((objeto)=>{
        return objeto.idade > 17;
    });

    if ( resultado){
        console.log("festa liberada");
    }else{
        console.log("Festa não liberada");
    }
};

fiscalizarFesta(usuarios);