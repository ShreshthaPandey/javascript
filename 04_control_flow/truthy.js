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

