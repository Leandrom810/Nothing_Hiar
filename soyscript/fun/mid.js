function trygrab(value, chance){
    return new Promise((resolve, reject) => {
        if(Math.random() < chance){
            reject("erro. ");
        }else{
            resolve(value);
        }
    });
}
trygrab('testing', 0.1)
.then((x)=>x)
.then(console.log,(error) =>  console.log(error))
.catch(console.log)
.then(console.log("Finalização."));