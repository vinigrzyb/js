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

function exibirTelefones(tel1, tel2){
    console.log(`Telefone 1: ${tel1}`);
    console.log(`Telefone 2: ${tel2}`);
}

exibirTelefones(estudante.telefones[0], estudante.telefones[1])
//Spread operator (...): Espalha os itens de um array
//"desfaz" o array e aplica a função em cada um dos seus itens
exibirTelefones(...estudante.telefones);

//Spread operator também pode ser usado em objetos
//é usado para inserir dados de um objeto dentro de outro objeto
const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]
}
console.log(dadosEnvio);