const ControllerUser = require('../controllers/controllerUser')

const routeRecipes = require('express').Router()

routeRecipes.post('/register', ControllerUser.register)
routeRecipes.post('/login', ControllerUser.login)
routeRecipes.post('/glogin', ControllerUser.googleLogin)

module.exports = routeRecipes