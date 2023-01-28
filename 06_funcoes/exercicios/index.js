/*
1. Escreva uma funcao que retorne um numero aleatorio, o numero maximo retornado deve ser passado via parametro


const randomNumer = (num) => {
  return Math.floor(Math.random() * num) + 1;
};

console.log(randomNumer(5));



2. Uma funcao que detecte o tipo do dado passado e retorne uma mensagem para cada tipo.
*/

const verifyDataType = (data) => {
  if (typeof data === 'string') {
    console.log('O tipo de dado é uma string.');
  } else if (typeof data === 'number') {
    console.log('O tipo de dado é um numero');
  } else {
    console.log('O tipo de dado é um booleano');
  }
};

verifyDataType('Olha');
verifyDataType(true);
verifyDataType(4);
