let myDate = new Date()

console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.getFullYear());

let myNewDate = new Date(2023, 0, 23)

console.log(myNewDate.toDateString());
console.log(myNewDate.toLocaleString());

myNewDate.toLocaleString('default',{
    weekday: "long"
    
})