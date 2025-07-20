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

// behind the scene

class Teacher extends user{
constructor(username , email , passward){

    super(username) // extend class of teacher that is user so you user class ke constructor ke jakr lekr ata hi username ko....automatically yoh username ko set kr dega this keyeard ko lekr
    this.email = email
    this.passward = passward
    }

    addCourse(){
        console.log(`a new course was added by the ${this.username}`)
    }
}

const name =  new Teacher("chai" , "abc@gmail.com" , "123" )

chai.addCourse() // chai is not defined... chai is not a class object
// chai is not defined because we have not created an object of createUser class

console.log(Teacher instanceof user); // true... Teacher is a child class of user so it will return true
