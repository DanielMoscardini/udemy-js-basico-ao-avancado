let btn = document.querySelector('#btn');
let p = document.querySelector('#p');

btn.addEventListener('click', function (e) {
  console.log('Clicou no button');
  e.stopPropagation();
});

p.addEventListener('click', function () {
  console.log('Clicou no paragrafo');
});
