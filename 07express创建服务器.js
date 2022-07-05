const  express =require('express')

const app =express()
//监听get，post 请求，并向客户端相应具体的内容
app.get('/user',(req,res)=>{
    //调用express提供 res.send（）方法，向客户端响应一个 Json对象
    res.send(
        {name:'zs',age:20,gender:'男'}
        )
})

app.post('/user',(req,res)=>{
    res.send('请求成功')

})

app.get('/',(req,res)=>{
    console.log(req.quary)
    res.send(req.quary)
     
})
 //注意：这里的 ：ID是一个动态的参数
 app.get('/user/:id',(req,res)=>{console
     //req.params是动态匹配到的URL参数，默认也是一个空对象
     console.log(req.params)

     res.send(req.params)

 })
app.listen(80,()=>{

    console.log('express serveer running  at http://127.0.0.1')

})