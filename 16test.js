//导入自定格式化时间义模块
const TIME = require('./15dateFormate.js') 
//调用方法，进行时间格式化
const dt=new Date()

const newDT=TIME.dateFormat(dt)
console.log(newDT)