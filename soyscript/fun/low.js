class Individuo{
    constructor(nome, idade){
        this.name = nome;
        this._age = idade;
    }
    get Age(){
        return this._age;
    }
}
var leandro = new Individuo("Leandus", 18);
console.log(`Nome: ${leandro.name} Idade: ${leandro.Age}`)