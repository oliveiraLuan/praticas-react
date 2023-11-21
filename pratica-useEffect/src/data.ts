const products = [
  {
    id: 1,
    name: "TV",
    value: 3500.00
  },
  {
    id: 2,
    name: "Computador",
    value: 2120.00
  },
];

export function findProductById(id: number){
    return products.find(product => product.id === id);
}