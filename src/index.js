const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const route = require('./routes/route');
const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://sahilkushwaha:aasahil@cluster0.jluapfr.mongodb.net/employeeMGT?retryWrites=true&w=majority')
.then(() => console.log("MongoDB connecte"));

app.use('/',route);

app.listen(process.env.PORT || 3000, function(){
    console.log('Application running on port' + (process.env.PORT || 3000));
})