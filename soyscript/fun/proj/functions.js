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
function removeIfEmpty(collection){
    return collection.filter(val=>val.trim());
}

function endWith(collection, varwith){
    return collection.filter(element => element.endsWith(varwith));
}

function removeIfHas(collection, pattern){
    return collection.filter(value => !value.includes(pattern));
}
function removeIfNumber(collection){
    return collection.filter(value => {
        const numcheck = parseInt(value);
        return !(numcheck != 0 && !!numcheck)
    });
}

function removeSymbols(symbols){
    return function(collection){
        return collection.map(value => {
            let newtext = value
            symbols.forEach(symbol=>{
                newtext = newtext.split(symbol).join('');
            });
            return newtext
        });
    }
}


function compose(...funcs){
    return function(value){
        return funcs.reduce(async (inc, fun)=>{
            if(Promise.resolve(inc) === inc){
                return fun(await inc)
            } else{
                return fun(inc);
            }
        })
    }
    }


module.exports = {
    compose,
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

