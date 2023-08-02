const http=require("http")
const fs=require("fs")
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("Welcome to the homepage")
    }else if(req.url==="/data"){
        res.end("This is data....")
    }else if (req.url==="/users"){
        res.end("Users Data....")
    }else if(req.url==="/getData"){
        fs.readFile("./data.json","utf-8",(err,data)=>{
            if(err){
                res.end("wrong data")
            }else{
                res.end(data)
            }
        })
    }else if(req.url==="/about"){
        res.setHeader("content-type","text/html")
        res.end("<h1>Heading page</h1>")
    }
})
server.listen(8000,()=>{
    console.log("port is running at 8000")
})