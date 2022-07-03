const fs =require('fs')

fs.readFile('./1.txt','utf-8',function(err,dataStr){
    if (err){
        return console.log('文件读取失败！'+err.message)
    }
    // console.log('读取文件成功'+datastr)

    //按照空格 进行分割
    const arrOld = dataStr.split(' ')
    //循环分割，对每一项进行字符串替换
    const arrNew =[]
    arrOld.forEach(item=>{
        arrNew.push(item.replace('=',':'))
    })
    const newStr=arrNew.join('\r\n')
    console.log(newStr)

    fs.writeFile('./成绩.txt',newStr,function(err){
        if(err){
            return console.log('写入成绩失败'+err.message)
        }
            console.log('成绩写入成功')
        
    })
})