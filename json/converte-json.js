const estudante = require('./estudante.json');

//stringfy() transforma um json em uma string
const stringEstudante = JSON.stringify(estudante);
console.log(stringEstudante);
console.log(typeof(stringEstudante));

const objEstudante = JSON.parse(stringEstudante);
console.log(objEstudante);
console.log(typeof(objEstudante));