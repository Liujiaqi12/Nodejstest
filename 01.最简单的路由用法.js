const express = require('express')


const app =express()


app.get('/',(req,res)=>{
    res.send('hello world.')
})
app.post('/',(req,res)=>{
    res.send('post require.')
})

app.listen(80,()=>{
    console.log('serveer running at http://127.0.0.1')

})