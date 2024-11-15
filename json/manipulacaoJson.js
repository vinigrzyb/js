const objAnimais = require('./animais.json');

console.log(objAnimais);
console.log(typeof(objAnimais));

const novoAnimal = {
    id: 4,
    nome: 'Gato',
    tipo: 'Felino',
    habitat: 'casa'
}

//adiciona o objeto gato
objAnimais['animais'].push(novoAnimal);
console.log(objAnimais);

//muda o habitat do gato
objAnimais['animais'][3].habitat = 'onde ele quiser'
console.log(objAnimais);

//remove o objeto gato
objAnimais['animais'].pop();
console.log(objAnimais);
