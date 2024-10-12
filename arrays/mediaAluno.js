const alunos = ["cleber", "rodrigo", "andré", "ana"];
const notas = [10, 8, 7.5, 6];

const lista = [alunos, notas];

function nomeNota(aluno){
    if(lista[0].includes(aluno)){
        let indice = lista[0].indexOf(aluno);
        let nota = lista[1][indice];
        console.log(`A média do aluno ${aluno} é ${nota}`);
    }else{
        console.log("Aluno não encontrado");
    }
}

nomeNota("cleber");