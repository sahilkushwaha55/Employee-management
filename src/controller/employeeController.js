const employeeSchema = require('../model/employeeModel');
const JWTToken = require('jsonwebtoken');

const employeeRegister = async function(req,res){
    let data = req.body;
    let {firstName, lastName, DOB, joinningDate, phone, email, password} = data;
    let employeeData = await employeeSchema.create(data);
    res.send("hit api");
}

const login = async function(req,res){
    let data = req.body;
    let employee = await employeeSchema.findOne(data);
    const token = JWTToken.sign({
        userId : employee._id,
        userEmail : employee.email
    },"sahil's Secret Key");
    res.setHeader("token",token);
    res.send(token);
}

const updateData = async function(req,res){
    let data = req.body;
    let employee = await employeeSchema.findById(req.params.id);
    let changeData = await employeeSchema.updateOne({_id : employee._id},{$set : {firstName :data.firstName}},{new : true});
    // console.log(req.params.id,employee,changeData);
    res.send(changeData);
}

const employees = async function(req,res){
    let data = req.query;
    let allEmployee = await employeeSchema.find(data);
    res.send(allEmployee);
}

module.exports = {employeeRegister, login, updateData, employees};