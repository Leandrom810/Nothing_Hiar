function fun(fn){
    fn();
}

function hi(){
    console.log("ehsan");
    return 3;
}
fun(hi);

function run(runnable){
    return runnable();
}
const test = run(Math.random);
console.log(test);