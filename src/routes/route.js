const express = require('express');
const router = express.Router();
const employeeRegister = require('../controller/employeeController');
const {authentication, authorization} = require('../middleware/auth')


router.post("/register",employeeRegister.employeeRegister);

router.post("/login", employeeRegister.login);

router.put("/updateProfile/:id",authentication,authorization, employeeRegister.updateData);

router.get("/employees",employeeRegister.employees);

module.exports = router;