const coding = ["js" , "ruby" , "java" , "python" , "cpp"]
 
coding.forEach(function  (item) { //callback fn so no name
console.log(item);
})

coding.forEach( (item) => { // arrow fn
console.log(item)
})
// **********unique way********************

function printMe(item){
    console.log(item)
}
console.log("   ")
coding.forEach(printMe)

// **********************************************

coding.forEach((item , index ,arr ) =>{ // printing multipe at a time
    console.log(item , index, arr);
})


const mycoding = [

    {
        langName : "java script",
        langFile: "js"
    },
    
    {
        langName : "pava script",
        langFile: "ps"
    },
    
    {
        langName : "bava script",
        langFile: "bs"
    }
]

mycoding.forEach((item) => {
console.log(item.langName);
console.log(item)
})