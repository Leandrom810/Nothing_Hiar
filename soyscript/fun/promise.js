let p = new Promise(function(fullfill){
    fullfill({
        um: 1,
        dois: 2
    });
});

p.then((x)=> console.log(x.dois));

function waitfor(time = 3000){
    return new Promise(function(reward){
        console.log("Running...");
        setTimeout(function(){
            reward("Promised.");
        },time);
    }).then(text => console.log(text));
}
waitfor(2000);

for(x = 0; x <= 10; x++){
    setTimeout(function(){console.log(x)}, 5000);
}

//p.then(valor => console.log(valor.um));