// Lista de itens pedidos
const comanda = [
    {pedido: "Torresmo", preco: 39.50, quantidade: 1},
    {pedido: "Bebida", preco: 7.50, quantidade: 5},
    {pedido: "Batata Frita", preco: 40.00, quantidade: 1},
    {pedido: "Chopp", preco: 12.00, quantidade: 2},
];

let valorTotal = 0; // começa em zero

// Soma o valor de cada item
for (let i = 0; i < comanda.length; i++) {
    let item = comanda[i];
    valorTotal = valorTotal + (item.preco * item.quantidade);
}

// Adiciona 10% de serviço
let valorComServico = valorTotal * 1.10;

// Mostra o resultado
console.log("=== COMANDA DO BAR ===");
console.log("Valor dos produtos: R$ " + valorTotal.toFixed(2));
console.log("Valor com 10% serviço: R$ " + valorComServico.toFixed(2));