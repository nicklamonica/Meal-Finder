const jwt = require('jsonwebtoken');
const keys = require('../config/keys');


//this middleware is for accessing protected/ private routes
module.exports = (req, res, next) => {
    //get token from header
    let token = null;
    if (req.method == "POST") {
        token = req.body.headers['x-auth-token']
    } else if (req.method == "GET") {
        token = req.headers['x-auth-token']
    }


    //check if there is a token
    if (!token) {
        return res.status(401).json({ msg: 'no token, authorization denied' })
    }
    try {
        //get the key and decode the webtoken
        const decoded = jwt.verify(token, keys.jwtSecret);
        // payload put into decoded, take the user out 
        // (only user id), assign it to request object
        req.user = decoded.user;
        next();
    } catch (e) {
        console.log(e.message);
        res.status(401).json({ msg: 'Token is not valid' });
    }
}