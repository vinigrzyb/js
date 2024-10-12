//função que deixa o primeiro caractere das palavras de uma string em caixa alta
const input = "vinicius grzyb";

function upCase(string){
    let i = string[0];
    let upCase = i.toUpperCase();
    let nStr = upCase + string.split(i)[1];
    // console.log(nStr);
    return nStr;
}

function newString(string){
    let a = [];
    let arr = string.split(" ");
    arr.forEach(i => {
        a.push(upCase(i));
    });
    console.log(a.join(" "))
}
newString(input);

// versão melhorada
function capitalizeFirstLetter(str){
    return str
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
}
let result = capitalizeFirstLetter(input);
console.log(result);
