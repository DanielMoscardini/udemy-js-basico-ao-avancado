let btn = document.querySelector('#btn');

btn.addEventListener('mousedown', function () {
  console.log('Apertou o botao');
});

btn.addEventListener('mouseup', function () {
  console.log('Soltou o botao');
});

let btn2 = document.querySelector('#btn2');

btn2.addEventListener('dblclick', function () {
  console.log('Clicou duas vezes');
});
