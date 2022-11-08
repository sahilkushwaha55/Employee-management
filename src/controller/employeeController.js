const employeeSchema = require('../model/employeeModel');
const JWTToken = require('jsonwebtoken');

const employeeRegister = async function(req,res){
    let data = req.body;
    let {firstName, lastName, DOB, joinningDate, phone, email, password} = data;
    if(!firstName || !lastName || !DOB || !joinningDate || !phone || !email || !password)
    return res.send("Please fill all required filled");
    let checkEmail = await employeeSchema.findOne({email : email});
    if(checkEmail) return res.send("Email already register");
    let checkPhone = await employeeSchema.findOne({phone : phone});
    if(checkPhone) return res.send("Phone number register with other employee");
    let employeeData = await employeeSchema.create(data);
    res.send(employeeData);
}

const login = async function(req,res){
    let data = req.body;
    if(!data.email) return res.send("Please enter emailId");
    if(!data.password) return res.send("Please enter password");
    let employee = await employeeSchema.findOne({email : data.email, password : data.password});
    if(!employee) return res.send("Wrong email or password");
    const token = JWTToken.sign({
        userId : employee._id,
        userEmail : employee.email
    },"sahil's Secret Key");
    res.setHeader("token",token);
    res.send(token);
}

const updateData = async function(req,res){
    let data = req.body;
    if(!req.params.id) return res.send("No id in path params");
    if(!data) return res.send("Please enter data to update");
    if(data.email){
        let checkEmail = await employeeSchema.findOne({email : email});
        if(checkEmail) return res.send("Email already register");
    }
    if(data.phone){
        let checkPhone = await employeeSchema.findOne({phone : phone});
        if(checkPhone) return res.send("Phone number register with other employee");
    }
    let employee = await employeeSchema.findById(req.params.id);
    let changeData = await employeeSchema.updateOne({_id : employee._id},{$set : {firstName :data.firstName,
    lastName : data.lastName, DOB : data.DOB, password : data.password}},{new : true});
    res.send(changeData);
}

const employees = async function(req,res){
    let data = req.query;
    let allEmployee = await employeeSchema.find(data);
    res.send(allEmployee);
}

module.exports = {employeeRegister, login, updateData, employees};