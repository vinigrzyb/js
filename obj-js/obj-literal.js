const user = {
    nome: 'teste',
    email: 'teste@mail.com',
    nascimento: '08/02/2006',
    role: 'estudante',
    ativo: true, //por padrão
    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
}

// user.exibirInfos()

 const exibir = function(){
    console.log(`nome: ${this.nome}\nemail: ${this.email}`);
 }

//bind: assosia dois valores
//nesse caso: assosia a const exibir com o objeto user, possibilitando o uso do "this"
const exibirDados = exibir.bind(user);
exibirDados()

exibir.call(user)