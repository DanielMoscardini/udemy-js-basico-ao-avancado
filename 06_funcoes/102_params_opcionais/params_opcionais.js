const nomeComIdade = (nome, idade) => {
  if (idade === undefined) {
    console.log(`Seu nome é: ${nome}`);
  } else {
    console.log(`Seu nome é: ${nome} e sua idade é: ${idade} anos`);
  }
};

nomeComIdade('Daniel', 21);
nomeComIdade('Gandalf');
