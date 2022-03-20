const fs = require("fs");
const path = require("path");
const { isNumberObject } = require("util/types");

function test(){
    console.log("lulululu");
}

function readDir(pathvar){  
    return new Promise((files, reject)=>
    {try {
        let fileslisted = fs.readdirSync(pathvar);
        const toReturn = fileslisted.map(file => path.join(pathvar, file));
        files(toReturn);

    } catch(e){
        reject(e);
    }
    })
}

function readFile(pathvar){
    return new Promise((files, reject) =>{
        try{
            const content = fs.readFileSync(pathvar, {encoding: "utf-8"});
            files(content.toString());
        }catch(e){
            reject(e);
        }

    })
}

function readFiles(varpath){
    return Promise.all(varpath.map(path=> readFile(path)));
}
function removeIfEmpty(array){
    return array.filter(val=>val.trim());
}

function endWith(array, varwith){
    return array.filter(element => element.endsWith(varwith));
}

function removeIfHas(array, pattern){
    return array.filter(value => !value.includes(pattern));
}

function removeIfNumber(array){
    return array.filter(value => {
        const numcheck = parseInt(value);
        return !(numcheck != 0 && !!numcheck)
    });
}

function removeSymbols(symbols){
    return function(array){
        return array.map(value => {
            let newtext = value
            symbols.forEach(symbol=>{
                newtext = newtext.split(symbol).join('');
            });
            return newtext
        });
    }
}





module.exports = {
    test,
    readDir,
    endWith,
    readFile,
    readFiles,
    removeIfEmpty,
    removeIfHas,
    removeIfNumber,
    removeSymbols
}

