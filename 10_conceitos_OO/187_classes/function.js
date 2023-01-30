function criaCachorro(raca, patas, cor) {
  let cachorro = Object.create({});
  cachorro.raca = raca;
  cachorro.patas = patas;
  cachorro.cor = cor;
  cachorro.latir = function () {
    console.log('Au au');
  };
  return cachorro;
}

let doberman = criaCachorro('Doberman', 4, 'preto');

console.log(doberman);
/*
{
  raca: 'Doberman',
  patas: 4,
  cor: 'preto',
  latir: [Function (anonymous)]
}
*/

doberman.latir(); // Au au
