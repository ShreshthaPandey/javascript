//outside global scope
//inside curly braces => local scope


if(true){

//let a = 20 // scope inside fn
//const b = 30 // scope inside fn
var c = 50 // scope outside fn ...high scope also...will print outside

}

// console.log(a); // dont print
// console.log(b);// dont print
// console.log(c);// print 

function one(){
const usernmae = "tanu"
function two(){
    const website = "abc@gmail.com"
    console.log(usernmae)
}
//console.log(website);// if accessing oputside hence wrror

two()
}
one()

if(true){
    const username = "hitesh"
    if(username==="hitesh"){
        const website = "youtube"
        console.log(username+website)
    }
     // console.log(website) // scope not here so error
}
//console.log(username) // scope linmited so error

// *********************interesting ********************

 console.log(addOne(5)) // not error here if called before fn

function addOne(num){
return num+1
}

addOne(5) 


console.log(addTwo(5)) // error if palced here

const addTwo = function(num){ // also a way to represt fn 
    return num+2

}
addTwo(5)