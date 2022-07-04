//1 创建路由模块对应的 .js 文件
const express=require('express')
//2 调用 express.Router() 函数创建路由对象
const router= express.Router()
//3 向路由对象上挂载具体的路由
router.get('/user/list',(req,res)=>{
    res.send('Get user list.')
})

router.post('user/add',(req,res)=>{
    res.send('add new user.')
})
//4 使用 module.exports 向外共享路由对象 5 使用 app.use() 函数注册路由模块

module.exports = router
