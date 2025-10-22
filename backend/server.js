const express = require('express')
const cors = require('cors')
const app = express()
const mysql = require('mysql2')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Root@123',
    database:'list'
})

db.connect((err)=>{
    if(err)
    {
        console.log("error connecting to DB")
        return
    }
    console.log("connected with DB")
})

app.get('/',(req,res)=>{
res.send('Backend is running...');
})

app.post('/add-item',(req,res)=>{
    console.log(req.body)
    db.query(`insert into todolist(itemDescription) values('${req.body.text}')`,(err,res)=>{
        if(err)
        {
            console.log("Error occured",err)
            return
        }
        console.log("Data added successfully")
    })
    res.send("added successfully")
})

app.listen(3000,()=>{
    console.log("server running... on port 3000")
})