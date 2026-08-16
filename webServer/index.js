const http = require("http");
const fs = require("fs")

const myServer = http.createServer((req, res) => {


    // console.log(req.headers);
    // console.log(req);
    const log = `${Date.now()}:${req.url}New Req Received\n`

    fs.appendFile('log.txt', log, (error, data) => {

        switch (req.url) {



            case '/': res.end("home page")
                break;

            case '/about':
                res.end("hello i am rahul sah ")
                break;

            default:
                res.end("404 not found")

        }
        // if (error) {
        //     console.log(error);


        // } else {
        //     console.log(data);


        // }
        // res.end("hello from server")

    })

    // res.end("Hello from server");

});
//portnumber
myServer.listen(8000, () => console.log("server started!"));

