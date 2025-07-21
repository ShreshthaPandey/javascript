 const descriptor = Object.getOwnPropertyDescriptor(Math , "PI") // this prop show some of the hidden property of object

//console.log(Math.PI);  // cant override this value 


console.log(descriptor) // pi value is hard core and cant be changr

const chai = {
    name : 'ginger chai',
    price : 250,
    isAvailable : true
}

console.log(Object.getOwnPropertyDescriptor(chai , "name")); // to get the description of name from chai 

Object.defineProperty(chai, 'name' , {
    writable: false,
    enumerable: false
}) // will change the features of name of chai ....check output

for (let [key , value] of Object.entries(chai)) {
    if(typeof value!== 'function'){
    console.log(`${key} : ${value}`);
    
}
}