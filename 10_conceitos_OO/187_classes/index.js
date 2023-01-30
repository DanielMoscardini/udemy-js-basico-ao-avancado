let cachorro = {
  patas: 4,
  raca: 'Dachshund',
  latir: function () {
    console.log('Au au');
  },
};

let labrador = Object.create(cachorro);
labrador.latir(); // Au au
labrador.raca = 'Labrador';
console.log(labrador.raca); // Labrador
