const {from, asyncScheduler} = require("rxjs")
const {observeOn} = require("rxjs/operators")

console.log("BC")

from([1, 2, 3, 4, 5, 6])
.pipe(observeOn(asyncScheduler))
.subscribe(console.log)

console.log("AC")