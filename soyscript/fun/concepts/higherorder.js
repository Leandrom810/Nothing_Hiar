//uma função pode ser executada dentro da outra

const anon = (a, b)=>a+b

function apply(func, ...variable){
    return func(...variable)
}

console.log(apply(anon, 10, 10));