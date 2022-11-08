const express = require('express');
const router = express.Router();
const employeeRegister = require('../controller/employeeController')


router.post("/super",employeeRegister.employeeRegister);

router.post("/login", employeeRegister.login);

router.put("/updateProfile/:id", employeeRegister.updateData);

router.get("/employees",employeeRegister.employees);

module.exports = router;