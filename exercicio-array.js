const nomePaises = ['brasil','canada','estados unidos','africa do sul', 'colombia'];

nomePaises.push('zimbabue');
//remove o pais no fim da lista
nomePaises.pop();
//adicionar um pais no inicio da lista
nomePaises.unshift('australia');
//remove um pais no inicio da lista
nomePaises.shift();
//imprimir o ultimo pais da lista
const ultimoPais = nomePaises[nomePaises.length -1];
console.log(ultimoPais);
//imprimir o segundo  pais da lista
console.log(nomePaises[1]);
//imprima o pais de index 2
console.log(nomePaises[2]);
console.log(nomePaises);

