//在外界使用require导入一个自定义模块的时候，得到的成员，
//就是 哪个模块中，通过 module.exports指向的那个对象

const m = require('./11自定义模块')


console.log(m)