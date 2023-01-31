let p = Promise.resolve(5);

console.log('Outros codigos');

console.log(p);

p.then((value) => {
  return value + 5;
}).then((value) => console.log(value));

/*
Outros codigos
Promise { 5 }
10
*/
