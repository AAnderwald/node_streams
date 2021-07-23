import {createReadStream} from "fs";                                                                //-Import or require the fs module
import http from "http";

http.createServer((request, response) =>                                                            //-Create a server
{
    const {url, method} = request;
    if (url == "/" && method == "GET")                                                              //Write a conditional statement that checks the request url for a “GET” request on  a “/”
    {
        response.setHeader("Content-Type", "text/html");                                            //If the method and url match the previous check (step c), use createReadStream to pipe the contents of an html file to the client You can design the html file however you choose 
        const readStream = createReadStream("./pages/index.html");       
        readStream.pipe(response);
    }else if (url == "/about" && method == "GET"){
        response.setHeader("Content-Type", "text/html");                                            //If the method and url match the previous check (step c), use createReadStream to pipe the contents of an html file to the client You can design the html file however you choose 
        const readStream = createReadStream("./pages/about.html");       
        readStream.pipe(response);
    }else {                                                                                         //If the method and url are not “/” and “GET”, use the same method to pipe the contents of a 404 not found html page
        response.setHeader("Content-Type", "text/html");
        const readStream = createReadStream("./pages/notfound.html");
        readStream.pipe(response);
    }
})

.listen(3000, () => console.log ("Servers is on 3000"));