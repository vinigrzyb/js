const estudante = {
    nome: 'José Silva',
    idade: 32, 
    cpf: '12345678910',
    turma: 'java',
    media: 7.5,
    aprovado: (mediaBase) => this.media >= mediaBase ? true : false;
}

console.log(estudante.aprovado(8))