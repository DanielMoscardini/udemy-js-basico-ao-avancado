let bnt = document.querySelector('#btn');

function msg() {
  alert('Clicou no botao');
}

btn.addEventListener('click', msg);

btn.removeEventListener('click', msg);
