const userEmail = "abc@gmail.com"

if(userEmail){ // email ke andr kuch hi to maan lete hi true hi if dont have any value tehn assume it false

    console.log("got your email")
} else{
    console.log("not having email")
}

//falsy value

// * false
// *0
// *-0
// *bigInt 0n
// *" "
// *null
// *nan

//truthy value

//* 1
//* true
//* "0"
//*'false' => truthy value as inside string
//* "  " => space inside string is a truthy value
//*  [] , {} , function(){} .... truthy value


if(userEmail.length===0){
    console.log("Empty")
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("obj is empty")
}
//********************************************************** 

//nullish caescing operator (??) null undefined

let val1;
val1 = 5 ?? 10  // print first value => 5
val2 = null ?? 10  // for safety check and print 2nd value

var3 = undefined ?? 15



console.log(val1)
console.log(val2)
console.log(var3)

// this is basically use for null and undefined operator

// *********************************************************

// ternary operator

// consition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("good amt") : console.log("dont want this chai")