const http=require('http')
const server = http.createServer()

server.on('request',(req,res)=>{
    const str =`您请求的URL地址是${req.url}`
})