const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./config/db.js')
const bodyParser = require('body-parser');
const { prependOnceListener } = require('./config/db.js');
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("hello!");
    // console.log('/hello')
})

// 전체 조회 (등록 번호를 기준으로 오름차순)
app.get('/member',(req,res)=>{
    console.log('/member')
    db.query("select * from Member order by no",(err,data)=>{
        if(!err){
            res.send(data)
        }else{
            console.log(err)
        }
    })
})

// 멤버 추가
app.post('/member/add/',(req,res)=>{
    console.log('/member/add/')
    const {gender, age, nickname, information, email} = req.body // req.*****body******
    db.query(`insert into Member (gender, age, nickname, information, email) 
    values("${gender}","${age}", "${nickname}", "${information}", "${email}");`,(err,data)=>{
        if(!err){
            res.send(data)
        }else{
            console.log(err)
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})