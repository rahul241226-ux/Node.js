// const { log } = require("console")
const fs = require("fs")

//Sync

// it will write a file which name test.txt whre hey rahul is located
// fs.writeFileSync('./test.txt','hey rahul');


// // it will override above file
// fs.writeFileSync('./test.txt','hey raja');





//Async
// fs.writeFile('./test.txt','hey raja', (err)=>{})



//sync
// const result = fs.readFileSync("./contact.txt","utf-8");
// console.log(result);


//Async: it does not return anythhing , sync only give return
//async only only expect  callback like error or somethingelse

// fs.readFile("./contact.txt", "utf-8", (error, result) => {

//     if (error) {
//         console.log("error", error);


//     } else {
//         console.log(result);

//     }

// })



// it append data in file infront of given file
// fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString())




// fs.appendFileSync("./test.txt",` ${Date.now()}\n hey it me his small brother\n`)





// it copy a file detail an dmake new txt file
// fs.cpSync("./test.txt",'./copy.txt')






//it delete text file in this path which math this name
// fs.unlinkSync("./copy.txt")


// detail of that file
console.log (fs.statSync("./test.txt"))




//MAKE DIRECTORY or folder
// fs.mkdirSync("my-docs")


// amke folder, directory and file inside of that directory
fs.mkdirSync("my-doc/a/b",{recursive:true});

