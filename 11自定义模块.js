//在一个自定义模块中，默认情况下，module.exports={}

//向module.exports 对象上挂载 sayHello 方法

module.exports.uesername ='zs'

//向module.exports上挂载sayHello 方法
module.exports.sayHello =function(){
    console.log('hello!')
}