//Função pura é uma função cujo retorno é causado pelos valores de entrada.
// não há efeitos colaterais.

const PI = 3.14

//Essa função é impura. Pois requer uma variável fora dela que pode ser alterada
// function bosta(){ return Math.sqrt(raio) * PI}

// essa função é pura
function lixo(P){
    return P * P
}

//O conceito gira em torno de não ser algo imutável ou que simplesmente possui valores ou resultados imprevisiveis
//basicamente o motivo pelo qual eu reprovo sempre em matemática lol



console.log(lixo(10));