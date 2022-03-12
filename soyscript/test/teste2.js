console.log(`result: ${()=>2+2}`);//n funciona :(

function defaultparams(a){
    return a;
}

console.log(defaultparams(2));
console.log(defaultparams(2+2));
console.log(defaultparams(2, 2));
function defaultparams2(...a){
    return a;
}
console.log(defaultparams2(2, 2));