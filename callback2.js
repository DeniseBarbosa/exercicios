// é executado mais de uma vez, é executado infinitamente
//a cada dois segundo a frase é executada

setInterval(() =>{
   // console.log('Olá alunos e alunas!');
}, 2000)

// pode ser escrito assim tambem 

const imprimirFraase = () => {
    console.log("Ola, você está aprendendo a programar");
    //serve para enterromper como se fosse um ctrl c
    clearInterval(intervalo)
}

const intervalo =  setInterval(imprimirFraase, 2000);

let numero = 10;
const contador = setInterval(function(){
    console.log(numero)
    numero--
    if( numero === 0){
        console.log("Boooooon!!");
        clearInterval(contador);
    }
}, 1000);
