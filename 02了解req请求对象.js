const http =  require('http')

const server = http.createServer()

server.on('request',(req,res)=>{
    const url = req.url

    const method = req.method

    const str=`you request url is ${url},and request methond is ${method}`
    console.log(str)
    //调用res.end()方法，向客户端相应一些内容
    res.end(str)
})

server.listen(80,()=>{
    console.log('server running at http://127.0.0.1')
})