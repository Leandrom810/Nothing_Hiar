console.log("test");

const sum = function(a, b){return a + b}
console.log(`Resultado de a + b = ${sum(2, 2)}`);

//arrow

const increment = function(n){
    return n++;
}
const increment2 = (n) =>{
    return n*2;
}
const increment3 = (n) => n+1;

console.log(increment(1));
console.log(increment2(2048));
console.log(increment3(24));
console.log();