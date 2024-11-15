const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: '2017',
    cor: 'preto',
    ligado: false,
    ligar: function(){
        if(this.ligado == false){
            console.log('O carro foi ligado');
        }else{
            console.log('O carro já está ligado');
        }
    },
    desligar: 
}

for(i in carro){
    console.log(`${i}: ${carro[i]}`);
}