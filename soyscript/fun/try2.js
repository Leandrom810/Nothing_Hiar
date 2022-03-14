//Promises ficam sempre sob promessa :) Dá pra rodar o spam de "." livremente
//pois no fim é que a promise é executada, apesar de estar sendo invocada antes hehe

//fs.readFile(pathto, (error, x)=> console.log(x.toString()));
function readFile(){
    const fs = require("fs");
    const path = require("path");
    const p = new Promise(function(FileReader){
        const pathto = path.join(__dirname, "data.txt");

        FileReader(pathto);
    }).then(pathto => fs.readFile(pathto, (error, x) => console.log(x.toString())));
}

readFile();
console.log(".");
console.log(".");
console.log(".");
console.log(".");
console.log(".");
console.log(".");
console.log(".");
console.log(".");
console.log(".");
