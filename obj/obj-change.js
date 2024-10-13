const estudante = {
    nome: 'José Silva',
    idade: 32, 
    cpf: '12345678910',
    turma: 'java'
}

//função que cadastra dados em um objeto
function createItem(obj, item, value){
    obj[item] = value;
}

//cadastro de um array de objetos
createItem(estudante, 'enderecos', [
    {
        cep: 123123,
        rua: 'rua teste',
        num: '42',
        comp: 'apto 8'
    }
])


//adicionando um novo objeto ao array cadastrado
estudante.enderecos.push({ 
    cep: 321321,
    rua: 'rua etset',
    num: '24',
    comp: null
})

//mostra os dados
console.log(estudante);
console.log(estudante.enderecos);

//mostra apenas os endereços que tem complemento
const compOnly = estudante.enderecos.filter((end) => end.comp);
console.log(compOnly);
