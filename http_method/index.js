
 //get,post,put,patch.delete 

 
const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {



    if (req.url === '/favicon.ico') return res.end();
    const log = `${Date.now()}:${req.method} ${req.url}New Req Received\n`
    const myUrl = url.parse(req.url,true);
    // console.log(myServer);
    // console.log(myUrl);


    fs.appendFile('log.txt', log, (error, data) => {


        //switch (res.url)
        switch (myUrl.pathname) {



            case '/': 

            if(req.method== "GET") res.end("Home page")
                break;

            case '/about':
                // const qp=
                const username= myUrl.query.myname;
                res.end( `hi,${username}`)
                break;

                case "/seaech":
                    const search = myUrl.query.search_query;
                    res.end("here are your results for " + search);
                    case '/signup':
                        if(req.method =="Get") res.end("this is a signup form");
                        else if (req.method === "POST"){
                            //DB query
                            res.end("success");

                        }

            default:
                res.end("404 not found")
                

        }


    })


});
//portnumber
myServer.listen(8000, () => console.log("server started!"));

