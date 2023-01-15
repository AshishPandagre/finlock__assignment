const User = require('../models/userModel')

function homeController(req, res) {
  return res.json({ 'username': req.user.username })
}

module.exports = homeController
