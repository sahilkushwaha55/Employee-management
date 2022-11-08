const jwt = require('jsonwebtoken');

const authentication = async function(req,res,next){
    let token = req.headers['token'];
    jwt.verify(token, "sahil's Secret Key",function (err, decoded) {
        if (err) {
             res.send(err);
        } else {
            req.employeeID=decoded.userId;
            next()
        }
    })
}

const authorization = async function(req,res,next){
    if(req.employeeID != req.params.id) res.send("UnAuthorized Access");
    next();
}

module.exports = {authentication, authorization};