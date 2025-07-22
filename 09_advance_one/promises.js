const promiseOne = new Promise(function(resolve , reject){
    //do an async task
    //1- Data bases calls , cryptography , network

    setTimeout(function(){
        console.log('async task is completed');
        resolve() // connecting .then  here
    } , 1000)

}) // it is a object.....here promise is created


//consuption of promise
promiseOne.then(function(){ // .then direct connnection with resolve ... work done above will return here 
    console.log("promise cansumed")
})
  

new Promise(function(resolve , reject){ // 2nd way of making resolve promise

    setTimeout(function(){
        console.log("async ask 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("async resolved here")
})

// if want to pass parameter to the fn

const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({
            username:"chai", email : "hello@gami.com" // passing object in resolve fn
        }, 1000)
    })
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "tanu" , passward: "123"})
        }else{
            reject('ERROR: something went wrong')
        }
    }, 1000)
})

//  const userName = promiseFour.then((user) => { // cant do like this if want to extracty inside data
// console.log(user);
// return user.username
// })

// console.log(userName)

promiseFour.then((user) => { // cant do like this if want to extracty inside data
console.log(user);
return user.username
}).then((userName) => { // uper wale then se jo value return hokr ayegi yoh isme ayegi
    console.log(userName)
}).catch(function(error){  // chaining of then and catch
    console.log(error)
}).finally(()=>{
    console.log("the promise is either resolved or rejected") // will always be printed
})



const promiseFive = new Promise(function(resolve , reject){
     setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "tanu" , passward: "123"})
        }else{
            reject('ERROR: javascript went wrong')
        }
    }, 1000)
})

//***********************async  and await  ************ */
 // here we dont handle catch gracefully
// cant directly handle catch block or wrror 

// async function consume(){
//     const response = await promiseFive
//     console.log(response);
// }

// consume();

// async await cant directly resolve error


//so now do like this

async function consume(){
    try {
           const response = await promiseFive
           console.log(response);
    } catch (error) {
       console.log(error) 
    }
}

consume()

// async function getAllUsers(){
//      const response =  await fetch('htpps://abc.com/users') // network request hi..time lagega hence put in await
//     const data = response.json() // convert string data coming into jason
//      console.log(data);
// } 
//.................not good..wrap in try catch block.......


async function getAllUsers(){
    try{
              const response =  await fetch('htpps://abc.com/users') // network request hi..time lagega hence put in await
    const data =  await response.json() // convert string data coming into jason
      console.log(data);
    }catch(error){
        console.log("E:", error);
    }
}

getAllUsers()