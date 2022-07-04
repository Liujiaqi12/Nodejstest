//包的入口文件
//格式化时间的方法
function dateFormat(dateStr){
    const dt =new Date(dateStr)
    const y = dt.getFullYear()
    const m = padZero(dt.getMonth())
    const d = padZero(dt.getUTCDay())

    const  HH = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss =padZero(dt.getSeconds())

    return  `${y}-${m}-${d} ${HH}:${mm}:${ss}`
$

}

function padZero(n){
     return n >9 ? n: "0"+n
}

function htmlEscape(htmlstr){
    
    return htmlstr.replace(/<|>|"&/g, match  => {
        switch(match){
            case '<':
                return '&lt;'
                case '>':
                    return '&gt;'
                    case '"':
                        return '&quot;'
                    case '&':
                    return '&amp;'

            

        }

    })
}

module.exports={
    dateFormat,
    htmlEscape
}
//在 index.js中定义转义html的方法
