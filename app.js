const express = require('express')
const app = express()

app.listen(3000)

app.get('/',(req, res) =>{
//   res.send('Hello World')
res.sendFile("./views/index.html",{
    root:__dirname
})
//   res.render('views/index.html')
})
app.get('/about',(req, res) =>{
    //   res.send("<h1>About Page</h1>")
    //   res.render("<h1>About Page</h1>")
    res.sendFile("./views/about.html",{
        root:__dirname
    })
    })

app.use((request,response)=>{
    response.status(404).sendFile("./views/404.html",{
        root:__dirname
    })
})