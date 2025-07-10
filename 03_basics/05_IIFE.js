// Immediately invoked function Expression( IIFE)
// * application jaise start ho waise he database ka cunnections tart ho jaye
// * to avoid global scope ka pollution

(function chai(){
    console.log(`DB connected`);
})();

// (it is for writing fdn defintion )( function calll)
// put semi colon to end it

((name) => {
    console.log(`helo world ${name}`);
})('hitesh')