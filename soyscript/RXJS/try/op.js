const {of, from, interval} = require("rxjs")
const {map, last, first, concatAll} = require("rxjs/operators")
const {ajax} = require("rxjs/ajax")

//assim tbm é válido btw
//const obs$ = of(2, 1, "Eduardo", NaN, "Leamdron")

of(2, 1, "Eduardo", NaN, "Leamdron")
.pipe(last(),
    map(v=>v[0]),
    map(v=>`Last Letter ${v}`)
)
.subscribe((value)=>console.log(`Got: ${value}`))

interval(1000)
.pipe(
    map(_ => ["leandro", "Eduardo", "Alice"]),
    concatAll()
).subscribe(console.log)

