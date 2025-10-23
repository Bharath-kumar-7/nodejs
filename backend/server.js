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
    db.query('select * from todolist',(err,result)=>{
    if (err) {
            console.log("Error occured in get",err)
            return
        }
        console.log("Data:",result)
        res.json(result);
    })
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

app.put('/edit-item',(req,res)=>{
    console.log(req.body)
    db.query(`update todolist set itemDescription = '${req.body.itemDescription}' where ID = '${req.body.ID}'`,(err,res)=>{
        if(err)
        {
            console.log("Error occured",err)
            return
        }        console.log("Data updated successfully")
    })
    res.send("added successfully")
})

app.delete('/del-item',(req,res)=>{
    console.log(req.body)
     db.query(`DELETE FROM todolist WHERE ID = ?`, [req.body.ID],(err,res)=>{
        if(err)
        {
            console.log("Error deeleting",err)
            return
        }        console.log("Data deleted successfully")
    })
    res.send("deleted successfully")
})

app.listen(3000,()=>{
    console.log("server running... on port 3000")
})