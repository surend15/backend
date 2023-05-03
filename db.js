let  mysql=require("mysql")
let connection=mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "password",
    database:'newapp',
})
module.exports=connection
//CREATE TABLE imgs(id BIGINT,imgname VARCHAR(225),sqfit VARCHAR(225),cost BIGINT,print VARCHAR(225));