const express=require("express")
const { createEmp, getEmployees, getEmployee, updateEmp, deleteEmp } = require("../Controllers/empController")


let router=express.Router()

router.route("/").post(createEmp).get(getEmployees)
router.route("/:id").get(getEmployee).put(updateEmp).delete(deleteEmp)

module.exports=router