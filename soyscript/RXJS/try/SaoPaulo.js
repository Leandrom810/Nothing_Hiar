const {Observable } = require("rxjs");

const obs$ = new Observable(subscriber => {
    subscriber.next("Eu")
    subscriber.next("Não sei")
    subscriber.next("Oque")
    subscriber.next("Estou")
    subscriber.next("Fazendo")
    if(Math.random() > 0.5){
        subscriber.complete()
    }else{
        subscriber.error("SOCORRO")
    }
});

//Deprecated
// obs$.subscribe(value =>{
// value => console.log(`Got: ${value}`);}, 
// err=> console.log(`Erro! ${err}`),
// ()=>console.log("eu moro no hospital btw"));

obs$.subscribe({
    next: value => console.log(`Got: ${value}`),
    error: err=> console.log(`Erro! ${err}`),
    complete: console.log("eu moro no hospital btw")
})


// eu odeio o Eduardo Dias Oliveira!!!

//criar um algoritmo que conte de um valor minimo até um valor máximo, fofo

function minmax(min, max){
    let count = new Observable(subscriber=>{
        let x = min;
        while(x !== max){
            subscriber.next(x)
            if(x === 2050){
                subscriber.error("QUEBROU O RECORDE!!!!")
            }
            x++;
        }
        subscriber.complete();
    });

    count.subscribe({
        next: value => console.log(`X = ${value}`),
        error: err=>console.log(err),
        complete: ()=>console.log(`X = ${max}`)
    });
}

minmax(2, 2055)