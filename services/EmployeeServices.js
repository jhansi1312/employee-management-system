const express = require('express')
const { EmployeeSchema, Employee } = require('../models/Employee')
const mongoose = require('mongoose')

function handleCreateEmployee(body){
        // console.log(req.body)
        // const body =req.body
        // if(!body.name || !body.email || !body.MobileNo || !body.Designation)res.send("provide the required fields")
        {Employee.create({
            _id:body.id,
            name:body.name,
            email:body.email,
            MobileNo:body.mobileNo,
            Designation:body.designation,
            Gender:body.gender,
            course:body.course
        })
        }
        return "Employee created";
}

function handleGetEmployeeById(id){
    // EmployeeSchema.
    return Employee.findById(id)
    console.log(emp)
}

function handleUpdateEmployee(body){
    return Employee.findOneAndUpdate({
        name:body.name,
        email:body.email,
        MobileNo:body.mobileNo,
        Designation:body.designation,
        Gender:body.gender,
        course:body.course
    }

    )
}

function handleDeleteEmployee(id){
    // const emp = Employee.findById(id)
    // Employee.findOneAndDelete(emp);
    Employee.findByIdAndDelete(id).exec()
    .then(employee => {
      console.log(`Deleted employee with _id = ${id}`);
    })
    .catch(err => {
      console.error(err);
    })
}
module.exports = {
    handleGetEmployeeById,
    handleCreateEmployee,
    handleUpdateEmployee,
    handleDeleteEmployee
}