const jwt = require('jsonwebtoken')
const ExpressError = require('../utils/ExpressError')

function generateToken(payload) {
  const token = jwt.sign(
    payload,
    process.env.TOKEN_SECRET,
    { expiresIn: process.env.TOKEN_EXPIRY }
  )
  return token
}


function decodeToken(token) {
  let data 
  jwt.verify(token, process.env.TOKEN_SECRET, function(err, decoded) {
    if(err) throw new ExpressError('Login to continue.', 401)
    else data = decoded
  })

  return data
}


module.exports = {
  generateToken,
  decodeToken
}
