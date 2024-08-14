const express = require('express');
const { handleGetEmployeeById, handleCreateEmployee, handleUpdateEmployee, handleDeleteEmployee } = require('../services/EmployeeServices');
const { Employee } = require('../models/Employee');

const EmployeeRouter = express.Router()

// const employee = new Employee()

EmployeeRouter.post('/',async(req,res) => {
    const body = req.body
    const emp = await(Employee.findById(body.id))
    if(emp){
        // handleUpdateEmployee(body);
        res.send("The details are already present.Updating the details")
    } 
    else{const s = handleCreateEmployee(body);
    console.log(s);
    res.send(req.body)}   
})

EmployeeRouter.get("/:employeeId",async (req,res) =>{
    const id = req.params.employeeId
    console.log(id)
    const emp = await handleGetEmployeeById(id);
    if(!emp)return res.status(400).json("employee not found");
    res.send(emp);
});

EmployeeRouter.put('/:id',async(req,res) => {
    const id =req.params.id
    const emp = await(Employee.findById(id))
    if(!emp)res.send("The Employee is not present to be updated")
    else{const employee = await handleUpdateEmployee(id,req.body)
    res.send("Successfully Updated")}
})

EmployeeRouter.delete('/:id',async(req,res) => {
    const id =req.params.id
    const emp = await(Employee.findById(id))
    if(!emp)res.send("There is no such employee to be deleted")
    else{const employee =  handleDeleteEmployee(id)
        // Employee.findByIdAndDelete(id)
        res.send("Successfully deleted")
    }
})

module.exports = {
    EmployeeRouter
}