class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class teacher extends user{
    constructor(username , email , passward){

        super(username) // super will go to the class entends y teacher class that is (user) and take its username and do what to do...

        this.email = email
        this.passward = passward
    }

    addCourse(){
        console.log(`hello world ${this.username}`)
    }
}

const chai =  new teacher("chai" , "chai@gmail.com" , "123")

chai.addCourse()

const masalaChai = new user("masalaChai")
masalaChai.logMe()

console.log(chai===masalaChai) // false
console.log(chai=== teacher) // false

console.log(chai instanceof teacher); // true
console.log(teacher instanceof user) // false