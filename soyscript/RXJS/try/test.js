const {interval} = require("rxjs")

const genN = interval(200)

const tes = genN.subscribe(N =>{
    console.log(Math.pow(2, N))
})

setTimeout(() => tes.unsubscribe(), 4000);
