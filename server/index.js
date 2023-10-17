const express = require('express')

const app = express()
const mysql = require('mysql')

const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'password',
    database:'cruddatabase'
});

app.get("/",(req,res)=>{
    const sqlInsert= "insert into reviews (moviename,moviereview) values ('Pathan','Outstanding movie');"
    db.query(sqlInsert,(err,result)=>{
        res.send("Hello world")
    });
});
app.listen(3001,()=>{
    console.log('App is running at port 3001')
    console.log('App is running at port 3001')
})