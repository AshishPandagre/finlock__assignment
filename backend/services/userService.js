const User = require('../models/userModel')

async function findUser(filter) {
  const u = await User.findOne(filter)
  return u
}

async function createUser(data) {
  const u = await User.create(data)
  return u
}

module.exports = {
  findUser,
  createUser
}
