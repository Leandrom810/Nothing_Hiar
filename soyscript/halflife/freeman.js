//NOTHING HERE
//NOTHING HERE
//NOTHING HERE
//NOTHING HERE
//NOTHING HERE
//NOTHING HERE
//NOTHING HERE
//NOTHING HERE
//NOTHING HERE
//NOTHING HERE
//NOTHING HERE
//NOTHING HERE
//NOTHING HERE
//NOTHING HERE
//NOTHING HERE
//NOTHING HERE
//GET OUT GET OUT GET OUT

const Identity = a=>a
const SELF = f=>f(f)
const First = a=>b=>a
const Last = a=>b=>b
const T = First
const F = Last
const NOT = a => a(F)(T)
const AND = a => b => a(b)(F) 
const OR = a=>b=>a(T)(b)
const EQ = a=>b=>a(b)(NOT(b))
const XOR = a=>b=>NOT(EQ(a)(b))

let t = First(2)(3)
console.log(t)
const Flip = f => a => b =>f(b)(a)
t = Last(2)(3)
console.log(t)
t = First(2)(3)
console.log(t)
t = Flip(First)(2)(3)
console.log(t)

T.inspect = ()=> "true"
F.inspect = ()=>"false"

t = NOT(F)
console.log(t)
t = NOT(T)
console.log(t)

t = AND(F)(T)
console.log(t)
t = AND(T)(T)
console.log(t)
t = OR(F)(F)
console.log(t)
t = EQ(T)(F)
console.log(t)
t = EQ(T)(T)
console.log(t)
t = EQ(F)(F)
console.log(t) //true????
t = XOR(F)(T)
console.log(t) //true...
t = XOR(F)(F)
console.log(t) //false?????


//RESONANCE CASCADE