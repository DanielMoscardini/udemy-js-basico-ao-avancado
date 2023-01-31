function verificarNumero(num) {
  return new Promise((resolve, reject) => {
    if (num === 2) {
      resolve(console.log(`O numero é igual a ${num}`));
    } else {
      reject(new Error('Falhou!'));
    }
  });
}

verificarNumero(2); // O numero é igual a 2
verificarNumero(3); // Error: Falhou!
