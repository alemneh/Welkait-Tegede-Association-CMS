'use strict';
let jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  var token = req.body.token || req.headers['token'];
  console.log(req.boby);
  console.log(req.headers);
  if(token) {
    jwt.verify(token, 'GAME TIME', function(err, decoded) {
      console.log(decoded);
      if(err) {
        return res.status(401).json({success: false, message: 'Failed to authenticate'});
      } else {

        req.decoded = decoded;
        next();
      }
    });
  } else {

    return res.status(403).send({
      success: false,
      message: 'No token provided'
    });
  }
};
