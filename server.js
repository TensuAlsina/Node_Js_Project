const http = require('http')
const fs = require("fs")
const server = http.createServer((request,response)=>{
    console.log("Request Made")
    // console.log(request.method)
    
    response.setHeader('Content-Type','text/html')
    fs.readFile('./views/index.html',(err,data)=>{
        if(err)console.log("There is Error Tensu")
        response.write(data)
        response.end()

    })
    // response.write("<h1>Welcome Every Body</h1>")
    // response.write("BOB")
})

server.listen(3000,'localhost',()=>{
    console.log("listening for requests on port 3000")
})