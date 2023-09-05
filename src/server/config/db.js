var mysql=require('mysql')
const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'slmgkew47362!',
    database:'glomoyo_db',
    port:3307
})
module.exports=db;