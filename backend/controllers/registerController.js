const { hashPassword } = require("../services/passwordService")
const { findUser, createUser } = require("../services/userService")
const ExpressError = require("../utils/ExpressError")


async function registerController(req, res) {

  const { username, password } = req.body
  if (!username || !password) throw new ExpressError('Username and password are required.', 401)

  // check if username exists or not, if exists throw an error, else continue.
  const u = await findUser({ username })
  if (u) throw new ExpressError('Sorry, that username already exists!', 409)

  // hash the password and save it in database.
  const hashedPassword = await hashPassword(password)
  const user = await createUser({ username, password: hashedPassword })

  return res.status(200).json({
    message: 'User created successfully.'
  })

}

module.exports = registerController
