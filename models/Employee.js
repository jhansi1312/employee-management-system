const express = require('express')
const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    _id:{
        type:String,
    },
    name : {
        type:String,
        required : true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    MobileNo:{
        type:String,
        required:true,
        unique:true,
    },
    Designation:{
        type:String,
        required : true,
    },
    Gender:{
        type:String,
        // required:true,
    },
    course:{
        type:String,
        // required:true,
    }, 

});
// let counter = 0;

// EmployeeSchema.pre('save', function(next) {
//   if (!this._id) {
//     counter++;
//     this._id = counter;
//   }
//   next();
// });
const Employee = mongoose.model('Employee',EmployeeSchema)
// EmployeeSchema.plugin(increment,{modelName:Employee})
module.exports={
    Employee
}