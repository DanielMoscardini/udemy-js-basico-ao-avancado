const pessoa = {
  maos: 2,
};

console.log(Object.getPrototypeOf(pessoa)); // [Object: null prototype] {}
console.log(Object.getPrototypeOf(pessoa) === Object.prototype); // true

const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos); // 2

console.log(pessoaNova.hasOwnProperty('maos')); // false

console.log(pessoaNova.getPrototypeOf(pessoa) === pessoa); // true
