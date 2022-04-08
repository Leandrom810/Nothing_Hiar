const RL = require('readline')

function getAnswer(questioning){
    return new Promise(resolve=>{
        const rl = RL.createInterface({input: process.stdin,output: process.stdout});
        rl.question(questioning, answer =>{
            resolve(answer);
        });
    })
}

function gorlfrend(){
    setTimeout(()=>{
        console.log("Turn off the lights");
        console.log("It was such a sweet time");
        console.log("Could you pray for me my friend");
        console.log("it's starting over time");
    }, 2000);

}

function  keeper(){
    setTimeout(()=>{
        console.log("calling...");
        console.log("STANDING HERE I REALISED");
    }, 1000)
}

function observer(interest){
    interest.forEach(obs => obs());
}

observer([gorlfrend, keeper]);