const comanda = [
  { pedido: "Torresmo", preco: 39.50, quantidade: 1 },
  { pedido: "Bebida", preco: 7.50, quantidade: 5 },
  { pedido: "Batata Frita", preco: 40.00, quantidade: 1 },
  { pedido: "Chopp", preco: 12.00, quantidade: 2 }
];
// Digite seu código abaixo

let total = 0;

for (let i = 0; i < 4; i++) {
  total = total + (comanda[i].preco * comanda[i].quantidade);
}

let totalComServico = total * 1.10;

console.log("Valor dos produtos: R$ " + total.toFixed(2));
console.log("Valor com 10% de serviço: R$ " + totalComServico.toFixed(2));