
//Declaração de função
function func(){
    return "Fui declarado";
}

console.log(func());

//expressão

const algo = function(){
    return "Estou expressando";
}

console.log(algo());

const sum = (a = 0, b = 0) => a+b;

console.log(sum());
console.log(sum(2));
console.log(sum(2, 2));

var bom_dia = 2;
const bomdia = function(a=0, b=0){console.log(a + b)};

function Run(fun){
    if(typeof fun === 'function'){
        fun();
    }else{
        console.log("Error! Not a function.");
    }
}


Run(bom_dia);
Run(bomdia);

const sub = (a=0, b=0) => a - b;
const mul = (a=0, b=0) => a * b;
const div = (a=0, b=0) => a / b;
const operator = "";
function calc(a, b, operator){
    if(operator === "+"){
        return sum(a, b);
    }
    if(operator === "-"){
        return sub(a, b);
    }
    if(operator === "*"){
        return mul(a, b);
    }
    if(operator === "/"){
        return div(a, b);
    }
}

console.log(calc(2, 2, "/"));

function pot(base){
    return function(expoente){
        return Math.pow(base, expoente);
    }
}
const pot2 = pot(2);

console.log(pot2(4));
//se eu n quiser bloat
console.log(pot(2)(4));
//I HAVE THE POWEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEER

function somar(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

function calcular(a){
    if(a !== "NaN"){
        return function (b){
            if(b !== "NaN"){
                return function(func){
                    return func(a, b);
                }
            } else{
                console.log(b + " B");
            }
        }
    } else{
        console.log(a + " A");
    }
}
//FUNCIONAAAAAA
console.log(somar(2)(2)(3));
console.log(calcular(2)(8)((a, b)=>a + b));