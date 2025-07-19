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