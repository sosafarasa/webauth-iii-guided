const jwt = require('jsonwebtoken');


const Users = require('../users/users-model.js');
const secret = process.env.JWT_SECRET || 'Add a secret in the .env file'


module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if(token){
    jwt.verify(token, secret, (err, decodedToken) => {
      if(err){
        res.status(401).json({ message: 'You cannot access this!' }) //The token isn't valid
      } else {
        req.decodedToken = decodedToken
        next() //The token is valid
      }
    })
  } else {
    res.status(401).json({ message: 'You shall not pass' })
  }
};
