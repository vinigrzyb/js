const estudante = {
    nome: 'José Silva',
    idade: 32, 
    cpf: '12345678910',
    turma: 'java'
}

console.log(estudante.nome);            // substring retorna um pedaço de uma string, do primeiro parâmetro até o segudo - 1
console.log(`Os 3 primeiros digitos do cpf do ${estudante.nome} são ${estudante.cpf.substring(0, 3)}`)