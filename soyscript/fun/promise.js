let p = new Promise(function(fullfill){
    fullfill({
        um: 1,
        dois: 2
    });
});

p.then((x)=> console.log(x.dois));

