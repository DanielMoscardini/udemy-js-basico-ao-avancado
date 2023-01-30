const cachorro = {
  uivar: function () {
    console.log('Auuuu');
  },
};

cachorro.uivar(); // Auuuu

let pessoa = {
  nome: '',

  setNome: function (novoNome) {
    this.nome = novoNome;
  },

  getNome: function () {
    return this.nome;
  },
};

pessoa.setNome('Daniel');
console.log(pessoa.getNome()); // Daniel
