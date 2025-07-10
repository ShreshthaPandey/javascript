//if

// if(condition){ // condition true hoga then only it will run
 //code//
// }

// if(false){
    //code inside it will never run as it is false
// }

const isUserLoggedIn = true

if(isUserLoggedIn){
     console.log("hello world")
}

if(2=="2"){ // will execute
    console.log("executed")
}

if(2==="2"){ // sttrict checker ,,, check data type also hence not run
    console.log(" i am executed")
}

const temp = 61;

if(temp<=50){
    console.log("temp under 50")
} else{
    console.log("temp nopt under 50")
}

const score = 200

if(score> 100){
    const power = "fly"
    console.log(`user:power ${power}`);
}

// console.log(`user:power ${power}`); // error as scope inside fn

if(score> 200) console.log("test"), console.log("test2") // implicid stope 
// it is a bad practice so dont do like this

if(score<500){
    console.log("less")

} else if(score<200){
    console.log("medium")

}else{
    console.log("high")
}

const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard){
    console.log("allow to purchase ther corse")
}
