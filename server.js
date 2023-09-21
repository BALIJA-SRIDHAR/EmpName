const express = require("express")
const {engine} = require("express-handlebars")
const mongoose = require("mongoose")
const methodOverride=require("method-override")
const router = require("./routes/empRouter")
const path=require("path")

let app = express()

async function db(){
   mongoose.set('strictQuery',true);
   await mongoose.connect("mongodb://localhost:27017/EmpName")
   console.log("db connected");
}
db()

app.engine("handlebars",engine())
app.set("view engine","handlebars")

app.use(methodOverride("_method"))
app.use(express.urlencoded({extended:true}))
app.use("/Employee",router)
app.use(express.static(path.join(__dirname,"public")))


app.listen(5000,(err)=>{
    if (err) throw err
    console.log("server running");
})