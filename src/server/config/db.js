var mysql=require('mysql')
const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'1234!',
    database:'glomoyo_db',
    port:3307
})
module.exports=db;