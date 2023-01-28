const verificaIdade = function (idade) {
  if (idade >= 18) {
    return 'Pode dirigir';
  } else {
    return 'Nao pode dirigir';
  }
};

console.log(verificaIdade(19));
