let p = Promise.resolve(new Error('Nao deu certo!'));

console.log('Algum codigo');

p.then((value) => console.log(value)).catch((reason) => console.log(reason));

/*
Algum codigo
Error: Nao deu certo!
*/
