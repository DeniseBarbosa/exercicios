const array = [1,2,3,4,5,6];
const array1 = [1,2,3,4,5,6];

const [a,b] = array;
const [a1,b2,...resto] = array1;

console.log(a,b);
console.log(a1,b2,resto);
