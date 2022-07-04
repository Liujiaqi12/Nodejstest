const itheima = require('./itheima-tool')
//格式化时间功能
// const dtstr = itheima.dateFormat(new Date())

// console.log (dtstr)

const  htmlStr ='<h1 title ="abc">这是一个标签<span>123&nbsp</span><h1>'
const str = itheima.htmlEscape(htmlStr)

console.log(str) 