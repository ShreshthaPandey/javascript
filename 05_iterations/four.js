const myobj = {
    js : 'java script',
    cpp : 'c++',
    rb : 'ruby'
}

for (const key in myobj) { // for in loop
    console.log(key)
}

for (const key in myobj) {
    console.log(`${key} shortcut is for ${myobj[key]}`);
        
    }

const programming = ["js" , "rb" , "py" , "java" , "cpp"]

for (const key in programming) {
    console.log(key)
    console.log("is***")
    console.log(programming[key])
    }
