const listaProdutos = [
    {
        id: 1,
        nome: "Camiseta",
        preco: 25.99
    },
    {
        id: 2,
        nome: "Calça Jeans",
        preco: 49.99
    },
    {
        id: 3,
        nome: "Tênis",
        preco: 79.99
    },
    {
        id: 4,
        nome: "Boné",
        preco: 15.99
    }
]

//ordena os produtos por preçoe pode setar um limite de preço 
function ordenaFiltra(arr, item, maxPreco){
    if(!maxPreco) return arr.sort((a, b) => a[item] - b[item])
    else{
        const arrFiltrado = arr.filter(i => i[item] <= maxPreco);
        return arrFiltrado.sort((a, b) => a[item] - b[item])
    }
}

console.log('Ordenação por preço creçente:')
const produtosOrdenados = ordenaFiltra(listaProdutos, 'preco');
console.log(produtosOrdenados);

console.log('\nOrdenação por preço creçente com limite de 50 reais:')
const produtosOrdenadosLimitados = ordenaFiltra(listaProdutos, 'preco', 50);
console.log(produtosOrdenadosLimitados);