class Cachorro {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }

  latir() {
    console.log('Au au');
  }
}

Cachorro.prototype.raca = 'SRD';
Cachorro.prototype.patas = 4;

let labrador = new Cachorro('Labrador', 'Amarelo');

console.log(labrador.patas); // 4

labrador.latir(); // Au au

console.log(Cachorro.prototype.raca); // SRD
console.log(labrador.raca); // Labrador
