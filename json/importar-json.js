//require() para usar um arquivo json
//o método converte o arquivo json em um objeto normal, então da pra usar os métodos do node normalmente
const estudante = require('./estudante.json');
console.log(estudante);
console.log(typeof(estudante))