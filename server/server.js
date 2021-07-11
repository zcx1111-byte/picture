const express = require('express');
const readdir = require('./readdir');
const {join} =require('path');
let app = express();
app.use((req,res,next)=>{
    res.setHeader('access-control-allow-origin','*');
    next();
})
app.use(express.static(join(__dirname,'./media')))
readdir().then(data => {
    app.get('/file_list', (req, res) => {
        res.send(JSON.stringify(data))
    })
}, err => {
    console.log(err)
})

app.listen(8080,err=>{
    if(!err){
        console.log('服务启动成功')
    }else{
        console.log('失败')
    }
})
