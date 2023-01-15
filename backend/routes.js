const homeController = require('./controllers/homeController')
const registerController = require('./controllers/registerController')
const loginController = require('./controllers/loginController')
const catchAsync = require('./utils/catchAsync')
const userLoggedIn = require('./middlewares/userLoggedIn')

const router = require('express').Router()

router.get('/', userLoggedIn, homeController)
router.post('/register', catchAsync(registerController))
router.post('/login', catchAsync(loginController))

module.exports = router
