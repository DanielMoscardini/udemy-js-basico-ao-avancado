// let b = 2;

try {
  let a = 2 + b;
} catch (e) {
  console.log(`Algo deu errado -> ${e}`);
} finally {
  console.log('Fim da execucao');
}

// Algo deu errado -> ReferenceError: b is not defined

// Fim da execucao
