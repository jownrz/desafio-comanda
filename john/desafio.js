const comanda = [
  { pedido: "Torresmo", preco: 39.50, quantidade: 1 },
  { pedido: "Bebida", preco: 7.50, quantidade: 5 },
  { pedido: "Batata Frita", preco: 40.00, quantidade: 1 },
  { pedido: "Chopp", preco: 12.00, quantidade: 2 }
];

let total = 0
    
for (let i = 0; i < 4; i++) {
    total = total + (comanda[i].preco * comanda[i].quantidade);
}

let totalComServico = total * 1.10

console.log("Total dos itens: R$", total.toFixed(2))
console.log("Total com Serviço: R$", totalComServico.toFixed(2))
