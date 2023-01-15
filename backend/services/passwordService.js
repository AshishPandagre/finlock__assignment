const bcrypt = require('bcrypt')

async function hashPassword(password) {
  const hash = await bcrypt.hash(password, 10)
  return hash
}

async function verifyPassword(password, hash) {
  const res = await bcrypt.compare(password, hash)
  return res
}


module.exports = {
  hashPassword,
  verifyPassword
}
