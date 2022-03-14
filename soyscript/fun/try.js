const cart =[
    {name: "Pen", qtd: 100, price: 0.30, fragile: false},
    {name: "Printer", qtd: 2, price: 20.00, fragile: true},
    {name: "Notebook", qtd: 10, price: 1.00, fragile: false},
    {name: "Pencil", qtd: 200, price: 0.20, fragile: true},
    {name: "Cutter", qtd: 15, price: 0.70, fragile: false}
]

console.log("Produtos frágeis:");
cart.filter((x)=>x.fragile === true).map((x)=>console.log(x));
console.log("quantidade e preço apenas:");
cart.map((x)=>console.log(`Quantity: ${x.qtd} Price: $${x.price}`))
console.log("média de preços:");
console.log((cart.map((x)=>x.price).reduce((x, y) => x + y) / 5));