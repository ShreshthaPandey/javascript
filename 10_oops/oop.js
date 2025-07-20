const user = { // creating a object ...it is the base unit
userName : "tanu",
loginCount: 8,
signedIn: true,

getUserDetails: function(){
    console.log("get user details from database");
    console.log(`userName : ${this.userName}`);
    console.log(this);
}
}
console.log(this) // empty since in global level its empty
console.log(user.loginCount) // print any of user
console.log(user.getUserDetails());

//constructor fn

//const promiseOne = new Promise() // new keywaard is constructor fn
// it allow single orbject se mutiple contest
//every time it give new instance

function Myuser(username , loginCount , isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    function greet(){
        console.log("heelo ji")
        console.log(`hello your name ${this.username}`)
    }

//node 10_oops/oop.jsreturn this; // implicitely defined  so write or not not need
}

const user1 =new Myuser("tanu" , 63 , true)
const user2 =new Myuser("chai" , 34 , true)

console.log(user1)
console.log(user2)

// new keyward => create a new object
// constructor fn called due to new kwyward
//this keyward injected in the fn and giev to it