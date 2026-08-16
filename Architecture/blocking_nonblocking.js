const { log } = require("console")
const fs = require("fs")
const os = require('os')

console.log(os.cpus().length);// it say how many thread in can use 



// 1//sync// blocking
// fs.writeFileSync("./contact.txt","hello ")


// 2//Async// non blocking
// fs.writeFile("./test.txt","hello hi")





//3 blocking, sync:


// console.log("1");

// const result = fs.readFileSync("./contact.txt","utf-8")
//     console.log(result);

// console.log("2");






//4 Asyncronlus,non blocking// it will do all of the works before callback then do readfile in unblocking function:


// console.log("1");
// fs.readFile("./contact.txt", "utf-8", (error, result) => {

//     if (error) {
//         console.log(error);


//     } else {
//         console.log(result);

//     }
// })

// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");

//default thread pool size  and max as its core number

//  node blocking_nonblocking.js