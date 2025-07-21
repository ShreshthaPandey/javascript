//ES6 ke badd wali kahaani

class user { // declaring class

    constructor(username , email , passward){
        this.username = username;
        this.email = email;
        this.passward = passward
    }

    encryptPassward(){
        return `${this.passward}abc`
    }
}

const chai = new user("tanu" , "abc@gmail.com" ,"123")

console.log(chai)
console.log(chai.encryptPassward())

// behind the scene

function user2 (user2name , email , passward){
        this.user2name = user2name;
         this.email = email;
        this.passward = passward


}

user2.prototype.encryptPassward = function(){
    return `${this.passward}abc`
}

const tea = new user2 ("tea" , "tea@gmail.com" , "123")

console.log(chai.encryptPassward())




























