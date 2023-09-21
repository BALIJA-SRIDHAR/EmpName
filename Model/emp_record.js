const{model,Schema} = require("mongoose")

const empSchema = new Schema({
    empName:{
        type:String,
        required:true
    }
})

module.exports=model("Employees",empSchema)