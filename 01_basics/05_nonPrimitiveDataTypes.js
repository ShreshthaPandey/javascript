const name = ["tanu", "manu" , "dhanu"]
 let myobj = {
    name: "tanu",
    age: 21,


}

const myfn = function(){
    console.log("hello world")
}
console.log(myfn)
console.log(name)
console.log(typeof myfn)
myfn();

let userData = {
email: "tanu@gmail.com",
upi: 123456
}

console.log(userData)

let userTwo = userData

userTwo.email = "ram@gmail.com"

console.log(userData.email)
console.log(userTwo.email)

