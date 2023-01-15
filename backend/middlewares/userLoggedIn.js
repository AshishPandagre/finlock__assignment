const { decodeToken } = require('../services/tokenService')
const ExpressError = require('../utils/ExpressError')

function userLoggedIn(req, res, next) {

  //Authorization: 'Bearer TOKEN'
  const token = req.headers.authorization?.split(' ')[1]

  // check if req contains a token header.
  // if yes, decode the token and add it to req object, and continue.
  // else throw an error.

  if(!token) throw new ExpressError('Login to continue.', 401)

  req.user = decodeToken(token)

  next()
}

module.exports = userLoggedIn
