const { Observable } = require("rxjs")

const promise = new Promise(response => {
    response("resolution to resolutto");
    response("Leandro brony");
})

const obs = new Observable(taluigi =>{
    taluigi.next("garota de cowboy alô galera DJDIFASDHGJLSHFJDSHFKJSADH");
    taluigi.next("KKKKKKKKKKKKKKKKKKKK EU SOU FURRY");
    taluigi.next("amo São Paulo");
    setTimeout(()=>{
        taluigi.next("me tira daqui por favor")
    }, 1000);
    taluigi.complete(); //fim do taluigi...
})

promise.then(console.log);

obs.subscribe(console.log);