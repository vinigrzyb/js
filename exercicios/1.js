// Crie um objeto chamado pessoa que represente informações sobre uma pessoa. O objeto deve ter as seguintes propriedades: nome e notas. Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este método deve calcular a média das notas da pessoa.

// Adicione um método chamado classificarDesempenho ao objeto pessoa. Este método deve retornar uma categoria de desempenho com base na média calculada. Utilize as seguintes categorias:

// Desempenho excelente: média >= 9
// Bom desempenho: 7.5 <= média entre 7.6 e 8.9
// Desempenho regular: 6 <= média entre 6 e 7.5
// Desempenho insuficiente: média < 6
// Chame o método calcularMediaNotas para calcular a média das notas da pessoa e imprima no console a média calculada.

// Chame o método classificarDesempenho e imprima no console a categoria de desempenho da pessoa.

const pessoa = {
    nome: 'antonio',
    notas: [7, 8, 6],
    mediaNotas: function(){
        let totalNotas = this.notas.reduce((soma, nota) => soma + nota, 0);
        let media = totalNotas / this.notas.length;
        return media.toFixed(1);
    },
    desempenho: function(){
        if(this.mediaNotas() >= 9){
            return 'Exelente';
        }if(this.mediaNotas() >= 7.6){
            return 'Bom';
        }if(this.mediaNotas() >= 6){
            return 'regular';
        }else{
            return 'insuficiente';
        }
    }
}

console.log(`Média do aluno: ${pessoa.mediaNotas()}`);
console.log(`Desempenho do aluno: ${pessoa.desempenho()}`);