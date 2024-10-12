alunosNotas = [["vinicius", "cleber", "rodrigo", "ana"], [8, 4.6, 7.5, 6]]

//sintaxe do filter: parametro 1: var; parametro 2: index
const reprovados = alunosNotas[0].filter((_, i) => {
    return alunosNotas[1][i] < 7
})

console.log(reprovados)