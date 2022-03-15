function waitfor(time = 3000){
    return new Promise(function(value){
        setTimeout(()=>value(), time);
    });
}
function retorno(value){
    return new Promise(function(retornoo){
        setTimeout(()=>retornoo(value), 1000);
    })
}
waitfor().then(()=>console.log("vava")).then(waitfor).then(()=>console.log("vava")).then(waitfor).then(()=>console.log("vava")).then(waitfor);
async function run(){
    let value = await retorno(1)
    await waitfor(1500);
    console.log(`Running...${value}`);
    await waitfor(3000);
    console.log(`Running...${value + 2}`);
    await waitfor(4000);
    console.log(`Running...${value + 4}`);

}
run();