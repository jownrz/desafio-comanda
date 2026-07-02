const comanda = [
  {pedido: "Torresmo", preço: 40.50, quantidade: 1},
  {pedido: "Bebida", preço: 7.50, quantidade: 5},
  {pedido: "Batata Frita", preço: 38.00, quantidade: 1},
  {pedido: "Chopp", preço: 12.00, quantidade: 2},
];
// Digite seu código abaixo

let somaDaComanda = 0;

for (let i = 0; i < comanda.length; i++) {
  somaDaComanda += comanda[i].preço * comanda[i].quantidade;
}
let comandaComTaxa = somaDaComanda * 1.10;

console.log(`Soma da Comanda: R$ ${somaDaComanda.toFixed(2)}`);
console.log(`Comanda com serviço (10%): R$ ${comandaComTaxa.toFixed(2)}`);
