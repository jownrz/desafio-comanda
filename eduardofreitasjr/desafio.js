const comanda = [
  {pedido: "Torresmo", preço: 40.50, quantidade: 1},
  {pedido: "Bebida", preço: 7.50, quantidade: 5},
  {pedido: "Batata Frita", preço: 38.00, quantidade: 1},
  {pedido: "Chopp", preço: 12.00, quantidade: 2},
];

let total = 0;

for (let i = 0; i < comanda.length; i++) {
  total += comanda[i].preço * comanda[i].quantidade;
}

let totalGeral = total + (total * 0.10);

console.log("Valor total de produtos  R$ " + total.toFixed(2));
console.log("valor total + 10% de taxa de serviço: R$ " + totalGeral.toFixed(2));