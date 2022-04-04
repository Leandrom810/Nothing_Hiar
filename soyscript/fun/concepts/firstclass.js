//uma variável pode apontar para uma função

const a = function(){
    return "o pai é VIP"
}

console.log(a());

//no caso, a aponta para uma função que retorna uma string, assim deve ser tratado como uma função :)
// caso não seja, retornará o valor que aponta, ao invés do retorno da função