let novoElemento = document.createElement('p');
let texto = document.createTextNode('Algum texto');

novoElemento.appendChild(texto);

let heading = document.querySelector('#titulo-principal');
let paiHead = heading.parentNode;

paiHead.replaceChild(novoElemento, heading);
