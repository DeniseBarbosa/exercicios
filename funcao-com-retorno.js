
function determinarFaixaEtaria(idade){
    if (idade <= 21) {
        return "Jovem";
    }else if( idade >= 22 && idade <=65){
        return "Adulto";
    }else{
        return "idoso";
    }
};
 
console.log(determinarFaixaEtaria(15));
