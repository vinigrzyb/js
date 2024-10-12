const salaJS = [8, 7, 6, 7, 7];
const salaJava = [6, 5, 8, 9];
const salaPhyton = [5, 10, 9, 7];

function media(lista){
    const soma = lista.reduce((a, nota) => a + nota, 0);
    const media = soma / lista.length;
    return media;   
}

console.log(media(salaJS));
console.log(media(salaJava));
console.log(media(salaPhyton));