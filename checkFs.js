const fs = require("fs")
// fs.writeFile("rasta.txt","Rasta Is All About Love",(err,data)=>{
//     if (err) {
//         console.log("There is Error Tensu")
//     }
//     else{
//         console.log(data)
//     }
// })
// fs.readFile("/home/tensualsina/Desktop/projects/DjangoProjects/djangotodo/manage.py",(err,data)=>{
//     if (err) {
//         console.log(`There is Error Tensu ${err}`)
//     } else {
//         console.log(data.toString())
//     }
// })

// fs.unlink("./rasta.txt",(err)=>{
//     if (err) console.log(err)
//     console.log("File Deleted")
// })
// fs.mkdir("./News",(err)=>{
//     if(err)console.log("Error")
//     console.log("Folder Created")
// })

const readStream = fs.createReadStream('./rasta.txt')
readStream.on('data',(chunk)=>{
    fs.writeFile('news.txt',chunk,(err,data)=>{
        if(err)console.log(`Tensu Error ${err}`)
        console.log("File Added")
    })
})

