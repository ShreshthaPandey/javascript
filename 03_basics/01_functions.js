function sayMyName(){
    console.log("hitesh sir ")
}

sayMyName();

function addTwoNumber(number1, number2){
    console.log(number1 + number2);
    // return number1+number2; do this if want to sture value 

}

addTwoNumber(2,3);
addTwoNumber(3,"4");
addTwoNumber(3, 'a')
const result = addTwoNumber(3,5) // console.log not pass any value to fn hence undefined ....so if u want to store naywhere ...return the value

console.log("result:" , result)


function loginUserMsg(username = "sam"){
     // by putting same ..u put default value of username as "sam" ,,, when arguement not pass by user then sam will pass

if(username===undefined){
    console.log("plz enter username")
    return
}
    return `${username} just logged in`
}

//  const Myname = loginUserMsg("hitesh")
//  console.log(Myname)

console.log(loginUserMsg())