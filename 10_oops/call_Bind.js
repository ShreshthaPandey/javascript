function setUserName(username){
    this.username = username
}

function createUSer(username , email , passward){

    setUserName.call(this, username) // .call is used to call the setUserName fn.... .call is use tp hold the referennce of its fn
    // still not showing... call ho raha hi but call hote he hatt ja raha
    // use (this)... fnn run krne ke badd apna sara saman use ko de de rahaa hi

    this.email = email,
    this.passward = passward
}


const chai = new createUSer("chai" , "abc@gmail.com" , "123")

console.log(chai) // username is not displaying 
// actually setUserName inside createUser is not calling 
