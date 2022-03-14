//são funções com um retorno tardio ou imediato executadas em meio a um outro ambiente
//de função

function exec(fn, a ,b){
    return fn(a, b);
}
const sumter = (a, b) => console.log(a + b);
const subter = (a, b) => console.log(a - b);

exec(sumter, 25, 25);
exec(subter, 50, 80);

setInterval(()=>console.log("Retorno."), 1000);