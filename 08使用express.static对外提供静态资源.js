const express =require('express')
const app = express()
//使用express.static方法，快速的对外提供静态资源
// app.use(express.static('./clock'))
//在静态路径前添加前缀
app.use('/clock',express.static('./clock'))


app.listen(80,()=>{
    console.log('express server runninng at http://127/0.0.1')
})