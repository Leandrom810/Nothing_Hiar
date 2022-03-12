const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const b = a.map((x)=> x * 2);

const c = [
    {name: "jeandro", points: 2},
    {name: "Eeandro", points: 5},
    {name: "Aeandro", points: 4},
    {name: "Peandro", points: 7},
    {name: "Teandro", points: 8}
]
//maps
const d = c.map((x)=> x.name);

console.log(a);

console.log(b);

console.log(d);

//filter
const result = c.filter((x)=> x.points >= 5)
//map só pra selecionar o elemento
console.log(result.map((x)=>x.name));
console.log("///////////////////////////////////////////////")
//versão melhor
console.log(c.filter((x)=> x.points >= 5).map((X) => X.name));

//reduce
console.log(a.reduce((total, x)=> total + x));