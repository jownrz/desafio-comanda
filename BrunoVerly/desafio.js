const comanda = [
  { pedido: "Torresmo", preco: 39.50, quantidade: 1 },
  { pedido: "Bebida", preco: 7.50, quantidade: 5 },
  { pedido: "Batata Frita", preco: 40.00, quantidade: 1 },
  { pedido: "Chopp", preco: 12.00, quantidade: 2 }
]

let totalComanda = 0;
for (let i of comanda) {
  totalComanda += i.preço * i.quantidade;
}
console.log(`O total da comanda é R$${totalComanda.toFixed(2)}`);

let totalComServiço = totalComanda + (totalComanda * 0.1);
console.log(`O total da comanda com serviço é R$${totalComServiço.toFixed(2)}`);
