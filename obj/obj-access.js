const estudante = {
    nome: 'José Silva',
    idade: 32, 
    cpf: '12345678910',
    turma: 'java'
}

function showInfo(obj, item){
    return obj[item];
}

console.log(showInfo(estudante, 'nome'));
console.log(showInfo(estudante, 'cpf'))