const pessoa = {
  nome: 'Daniel',
  idade: 28,
  hobbies: ['tolkien', 'react case'],
};

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto); // {"nome":"Daniel","idade":28,"hobbies":["tolkien","react case"]}
