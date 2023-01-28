/*
const parOuImpar = (n) => {
  if (n % 2 == 0) {
    return 'Par';
  } else {
    return 'Impar';
  }
};

console.log(parOuImpar(4));
console.log(parOuImpar(17));
*/

const parOuImpar = (n) => (n % 2 == 0 ? 'Par' : 'Impar');

console.log(parOuImpar(4)); // Par
console.log(parOuImpar(17)); // Impar
