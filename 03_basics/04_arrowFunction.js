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
