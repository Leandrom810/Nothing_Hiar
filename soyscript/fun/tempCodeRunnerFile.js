
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
    if(typeof fun == 'function'){
        fun();
    }else{
        console.log("Error! Not a function.");
    }
}

//Run(bom_dia);
Run(bomdia());