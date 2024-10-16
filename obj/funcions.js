const estudante = {
    nome: 'José Silva',
    idade: 32, 
    cpf: '12345678910',
    turma: 'java',
    media: 7.5,
    aprovado: function(mediaBase){
        return this.media >= mediaBase ? true : false
        //o método 'this' não funciona com arrow function
    }
}

console.log(estudante.aprovado(7))