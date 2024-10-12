const nomes = ["vinicius", "carlos", "carlos", "antonio", "marcos"];

//cria um novo array nomes sem elementos repetidos
const nomesAt = [...new Set(nomes)];

console.log(nomesAt);