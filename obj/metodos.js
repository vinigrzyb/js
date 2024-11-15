const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    //  enderecos: [{
    //    rua: 'Rua Joseph Climber',
    //    numero: '45',
    //    complemento: 'apto 43'
    //  },s
    //  {
    //    rua: 'Rua Dona Clotilde',
    //    numero: '71',
    //    complemento: null
    // }]
}

//Object.keys() retorna um array com as chaves do objeto em formato de string
const objKeys = Object.keys(estudante);
console.log(objKeys);

//Object.values() retorna um array com os valores das chaves de um objeto
const objValues = Object.values(estudante);
console.log(objValues);

//Object.entries() retorna um array com as chaves e os valores do objeto, cada um em um array
const objEntries = Object.entries(estudante);
console.log(objEntries);

if(!objKeys.includes('enderecos')){
  console.error('Endereço não cadastrado');
}