const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    firstName : {
        type : 'String',
        required : true,
        trim : true
    },
    lastName : {
        type : 'String',
        required : true,
        trim : true
    },
    DOB : {
        type : "Date",
        required : true,
    },
    phone : {
        type : 'Number',
        required : true,
        unique : true
    },
    email : {
        type : 'String',
        required : true,
        unique : true,
        trim : true
    },
    joinningDate : {
        type : 'Date',
        required : true,
        trim : true
    },
    password : {
        type : "String",
        required : true
    }
}, {timestamps : true})

module.exports = mongoose.model('employee',employeeSchema);