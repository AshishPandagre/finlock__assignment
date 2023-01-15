const { verifyPassword } = require("../services/passwordService")
const { generateToken } = require("../services/tokenService")
const { findUser } = require("../services/userService")
const ExpressError = require("../utils/ExpressError")

async function loginController(req, res) {

  const { username, password } = req.body
  if (!username || !password) throw new ExpressError('Username and password are required.', 401)

  // check if the username exists and verify password.
  const u = await findUser({ username: username })
  if (!u) throw new ExpressError('Username or password is invalid.', 401)
  const result = await verifyPassword(password, u.password)
  if (!result) throw new ExpressError("Username or password is invalid.", 401)

  // generate token for user login.
  const token = generateToken({
    id: u._id,
    username: u.username
  })

  return res.status(200).json({ token })

}

module.exports = loginController
