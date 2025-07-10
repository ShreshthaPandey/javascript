const user = {
    userName : "tanu",
    price: 999,
    welcomeMsg : function(){
        console.log(`${this.userName}, welcome to website`)
// this shows current contest

console.log(this); //  print current contest
    } 


}

user.welcomeMsg()
user.userName = "sam"
user.welcomeMsg();

console.log(this) // empty as no object in global

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

const chai = () => {          // arrow function
   let username = "hitesh"
    console.log(this);
}
chai()


// const addTwo = (num1 , num2) =>{   // simple way 
//     return num1+ num2
// }

// console.log(addTwo(3,5))


const addTwo = (num1 , num2) => (num1 + num2) // explicid way ,..... if use round bracket ..then no need to give return keyword

console.log(addTwo(3,4))


const myName = (num1 , num2 ) => ({name : "hitesh"})
console.log(myName(3,5))