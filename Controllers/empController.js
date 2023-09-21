const { log } = require("console")
const empModel=require("../Model/emp_record")

const createEmp= async (req,res)=>{
    if(req.body.empName==null||req.body.empName==""){
        let data = await empModel.find().lean()
        res.render("home",{data,noEmp:"please fill the emp"})
    } else {
        let payload={
            empName: await req.body.empName
        }
 console.log(payload);
        await empModel.create(payload)
        res.redirect("/Employee")

      }
    }

  const getEmployees= async (req,res)=>{
    let data = await empModel.find().lean()
    res.render("home",{data})
 }

 const getEmployee= async (req,res)=>{
    let id=await req.params.id
    let updateEmpData= await empModel.findOne({_id:id}).lean()
    res.render("edit",{updateEmpData})
}

const updateEmp= async (req,res)=>{
    let payload={
        empName: await req.body.empName
    }
    await empModel.updateOne({_id:req.params.id},{$set:payload})
    res.redirect("/Employee")
}

const deleteEmp= async (req,res)=>{
    await empModel.deleteOne({_id:req.params.id})
    res.redirect("/Employee")
     }

     module.exports={
        createEmp,
        getEmployees,
        getEmployee,
        updateEmp,
        deleteEmp
     }