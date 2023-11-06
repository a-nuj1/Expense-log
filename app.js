// index.js file or main home file

const express=require('express')
const port = 8000;
// const path=require('path')
const app=express()
const db=require('./database/connect.js')
const expense=require('./models/expensemodel.js')
const bodyParser = require('body-parser')
const router = require('./routes/route.js')
db()

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/main.html')
})
app.use(express.static('public'))
app.use('/',router)

app.listen(port, (err)=>{
    if(err){
        console.log(`Error in running server :${err}`);
    }

    console.log(`Server is Up & running on port: ${port}`)
})
