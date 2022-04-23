const express =require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path');


dotenv.config()

app.use(express.json())
mongoose.connect(process.env.DATABASE_ACCESS,() => console.log("Database connected"))
app.use(require('./routes/routes'))

app.use(cors())
const PORT = process.env.PORT || 5000

if(process.env.NODE_ENV === "production"){
    app.use(express.static("frontend/build"));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    })
}


app.listen(PORT,()=>console.log("server is up and running"))

