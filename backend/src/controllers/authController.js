const jwt = require('jsonwebtoken');


function dLogin(req, res, next){
    const email = req.body.email;
    const password = req.body.password;

    if(email === 'mauro@gmail.com'
       && password === 'adm'){
       const token = jwt.sign({id: 1}, process.env.JWT_SECRET, {
               expiresIn: parseInt(process.env.JWT_EXPIRES) 
           })
           res.json({token});
    }
    else
       res.sendStatus(401);

}

function dLogout(req, res, next){

}

module.exports = {
    dLogin,
    dLogout
}