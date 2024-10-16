const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    enderecos: [{
      rua: 'Rua Joseph Climber',
      numero: '45',
      complemento: 'apto 43'
    },
    {
      rua: 'Rua Dona Clotilde',
      numero: '71',
      complemento: null
      }]
  }
  
function mostraDados(obj){
    for(let i in obj){
        const tipo = typeof(obj[i]);
        if(tipo !== 'object' && tipo !== 'function'){
            let text = `A chave ${i} tem o valor ${obj[i]}`;
            console.log(text);
        }
    }
}

mostraDados(estudante);