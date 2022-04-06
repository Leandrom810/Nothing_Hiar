//funções dentro de funções que recebem parâmetros e retornam funções lol

function final(start, end){
    return `${start} ${end}`;
}

function collect(start){
    return function(end){
        return final(start, end);
    }
}

console.log(collect("a")("b"))