const http = require('http')
const fs = require("fs")
const server = http.createServer((request,response)=>{
    console.log("Request Made")
    // console.log(request.method)
    const requestPage = request.url;
     
    response.setHeader('Content-Type','text/html')
    let path = "./views/"
    switch (request.url) {
        case "/":
            path += "index.html"
            break;
        case "/about":
            path += "about.html"
            break
        default:
            path += "404.html"
            break;
    }
    fs.readFile(path,(err,data)=>{
        if(err)console.log("There is Error Tensu")
        // response.write(data)
        response.end(data)

    })
    // response.write("<h1>Welcome Every Body</h1>")
    // response.write("BOB")
})

server.listen(3000,'localhost',()=>{
    console.log("listening for requests on port 3000")
})